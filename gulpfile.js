'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('lint', () => {
  gulp.src(['./simple-obj-test-1/**/*.js', 'gulpfile.js'])
    .pipe(eslint())
    .pipe(eslint.format())
});

gulp.task('test', () => {
  gulp.src('./simple-obj-test-1/test/*.js')
		.pipe(mocha());
});

gulp.task('default', ['lint', 'test'], function() {
  console.log('Gulp gulp, suckas! DEFAULT');
});

gulp.watch('./simple-obj-test-1/**/*.js', ['lint', 'test']);
