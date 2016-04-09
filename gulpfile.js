var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var livereload = require('gulp-livereload');

gulp.task('clean', function() {
  return del(['css/*.css']);
});
gulp.task('less',['clean'],function(){
  gulp.src('css/less/*.less')
      .pipe(less())
      .pipe(autoprefixer('last 2 versions'))
      .pipe(gulp.dest('css'))
      .pipe(livereload());
});
gulp.task('default', ['clean','less']);
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('css/less/*.less', ['clean','less']);
});
