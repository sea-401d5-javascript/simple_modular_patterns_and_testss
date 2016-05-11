const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('mochachai', () => {
  gulp.src('./test/greet_test.js')
    .pipe(mocha())
});
