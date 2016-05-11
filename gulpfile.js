'use strict'

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha')

gulp.task('default', ['lint','test'], function (){
  console.log('Gulp rocks');
});

gulp.task('lint', () => {
  gulp.src(['./simple-object-test/**/*.js','./gulpfile.js'] )
  .pipe(eslint())
  .pipe(eslint.format())
});
gulp.task('test', () => {
  return gulp.src('./simple-object-test/object-test/test.js')
    .pipe(mocha());
});

gulp.task('watch', () => {
  gulp.watch('./simple-object-test/**/*.js', ['lint', 'test']);
});
