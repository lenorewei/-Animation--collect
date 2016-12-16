var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');
var del = require('del');
var livereload = require('gulp-livereload');

gulp.task('clean', function() {
  return del(['css/*.css']);
});
gulp.task('webServer',function() {
  connect.server({
      livereload: true
    });
})
gulp.task('less',['clean'],function(){
  gulp.src('css/less/*.less')
      .pipe(less())
      .pipe(autoprefixer('last 2 versions'))
      .pipe(gulp.dest('css'))
      .pipe(connect.reload());
});
gulp.task('html', function() {
    return gulp.src('*.html')
        .pipe(gulp.dest(''))
        .pipe(connect.reload());
});
gulp.task('default', ['less','webServer','watch']);
gulp.task('watch', function () {
    gulp.watch(['css/less/*.less','index.html'], ['less','html']);
});
