const gulp = require('gulp'),
      gls = require('gulp-live-server'),
      concat = require('gulp-concat'),
      minifyHtml = require('gulp-htmlmin'),
      sass = require('gulp-sass'),
      rename = require('gulp-rename'),
      uglify = require('gulp-uglify'),
      watch = require('gulp-watch');
      
gulp.task('minify', function(){
    return gulp.src('app/**/*.html')
        .pipe(minifyHtml({collapseWhitespace: true}))
        .pipe(gulp.dest('build'));
});

gulp.task('scripts', function(){
    return gulp.src(['app/**/*.js'])
        .pipe(concat('build.js'))
        .pipe(uglify())
        .pipe(rename({
            basename: 'bundle',
            suffix: '.min'
        }))
        .pipe(gulp.dest('build/js'));
});

gulp.task('serve', function(){
    var server = gls.static(['build']);
    server.start();

    return watch(['build/**/*.css', 'build/**/*.html', 'build/**/*.js'], function(file){
        server.notify.apply(server, [file]);
    });
});

gulp.task('styles', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('build/css'))
});

gulp.task('watch', function(){
    return gulp.watch('app/**/*', ['styles', 'minify', 'scripts'])
    .on('change', function(event){
        console.log('File' + event.path + ' was ' + event.type + '.')
    });
});

gulp.task('default', ['scripts','styles','minify','serve','watch']);