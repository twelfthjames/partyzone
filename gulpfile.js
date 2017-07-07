const gulp = require('gulp'),
      gls = require('gulp-live-server'),
      concat = require('gulp-concat'),
      minifyHtml = require('gulp-htmlmin'),
      sass = require('gulp-sass');

gulp.task('minify', function(){
    return gulp.src('app/**/*.html')
        .pipe(minifyHtml({collapseWhitespace: true}))
        .pipe(gulp.dest('build'));
});

gulp.task('serve', function(){
    const server = gls.static('build', 3000);
});

gulp.task('styles', function(){
    return gulp.src('app/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'))
});

gulp.task('default', ['styles', 'serve']);