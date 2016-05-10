var gulp = require ('gulp');
var mocha = require('gulp-mocha');
var eslint = require('gulp-eslint')

gulp.task('default', function () {
  return gulp.src(['test/greet_test.js'], {read: false})
    .pipe(mocha());
})

gulp.task('lint', function () {
  return gulp.src(['**/*.js', '!node_modules'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
})
