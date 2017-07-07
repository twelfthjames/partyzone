const gulp = require('gulp'),
      gls = require('gulp-live-server'),
      sass = require('gulp-sass');

gulp.task('styles', function(){
    return gulp.src('app/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'));
});

gulp.task('serve', function(){
    const server = gls.static('build', 3000);
});

gulp.task('default', ['styles', 'serve']);