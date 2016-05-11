'use strict'

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha')

gulp.task('default', ['lint','test'], function (){
  console.log('Gulp rocks');
});

gulp.task('test', () => {
  return gulp.src('./simple-object-test/object-test/test.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});


gulp.task('lint', () => {
  gulp.src('./*.js')
    .pipe(eslint())
    .pipe(eslint.format())
});
