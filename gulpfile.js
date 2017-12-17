'use strict';

// # Plugins here #
var gulp = require('gulp'),
    glob = require('glob'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    babel = require('gulp-babel'),
    autoprefixer = require('gulp-autoprefixer'),
    logger = require('gulp-logger'),
    browserSync = require('browser-sync');





// Web Server Settings
// Synchronized Browser Reload, pc + mobile

// -------------------------------------------------
//     Local: http://localhost:3000 (Main pc)
//  External: http://your-ip:3000   (Other devices)
// -------------------------------------------------

gulp.task('browser-sync', function () {
    browserSync({
        open: true,
        notify: false,
        files: "dist/**/*.html, dist/**/*.css, dist/**/*.js",
        server: {
            baseDir: "dist",
            index: "index.html"
        }
    });
});

// # Compile PUG, SASS, JS & Watch changes #
// #           Exclude _lib folder         #

const pug_files = ['!src/{lib,lib/**}', '!src/**/lib/*.sass', 'src/**/*.pug'];
const sass_files = ['!src/{lib,lib/**}', '!src/**/lib/*.sass', 'src/**/*.sass'];
const js_files = ['!src/{lib,lib/**}', '!src/**/lib/*.sass', 'src/**/*.js'];
const other_files = ['!src/{lib,lib/**}', '!src/**/*.{pug,sass,js}', 'src/**/*']

gulp.task("watch-build", function () {

    var pug_compile = gulp.src(pug_files)
        .pipe(watch(pug_files))
        .pipe(pug())
        .pipe(gulp.dest('dist'))
        .pipe(logger({
            after: 'PUG Compiled!',
            extname: '.html',
            showChange: true
        }));
    
    var sass_compile = gulp.src(sass_files)
        .pipe(watch(sass_files))
        .pipe(sass())
        .pipe(gulp.dest('dist'))
        .pipe(logger({
            after: 'SASS Compiled!',
            extname: '.css',
            showChange: true
        }));

    var js_compile = gulp.src(js_files)
        .pipe(watch(js_files))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'))
        .pipe(logger({
            after: 'JS Compiled!',
            extname: '.js',
            showChange: true
        }));
    
    var files_compile = gulp.src(other_files)
        .pipe(watch(other_files))
        .pipe(gulp.dest('dist'))
        .pipe(logger({
            after: 'Files copied!',
            extname: '.files',
            showChange: true
        }));


        return [pug_compile, sass_compile, js_compile, files_compile];
});

// # Build Website, Compile sass, pug, js #
// #         adding prefix to css         #
// #            copying files             #

const prefix_files = ['!src/{lib,lib/**}', 'src/**/*.css'];

gulp.task("build", function () {

    var build_pug = gulp.src(pug_files)
        .pipe(pug())
        .pipe(gulp.dest('dist'))
        .pipe(logger({
            after: 'PUG Compiled',
            extname: '.html',
            showChange: true
        }));

    var build_sass = gulp.src(sass_files)
        .pipe(sass())
        .pipe(gulp.dest('dist'))
        .pipe(logger({
            after: 'SASS Compiled',
            extname: '.css',
            showChange: true
        }));

    var build_js = gulp.src(js_files)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'))
        .pipe(logger({
            after: 'JS Compiled',
            extname: '.js',
            showChange: true
        }));
    
    var build_prefix = setTimeout(function () {
        gulp.src(prefix_files)
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(gulp.dest('dist'))
            .pipe(logger({
                after: 'CSS Prefixed',
                extname: '.css-prefixed',
                showChange: true
            }));
    }, 1000);

    var build_files = gulp.src(other_files)
        .pipe(gulp.dest('dist'))
        .pipe(logger({
            after: 'Files copied!',
            extname: '.files',
            showChange: true
        }));
    
        // run all
    return [build_pug, build_sass, build_js, build_prefix, build_files];
});