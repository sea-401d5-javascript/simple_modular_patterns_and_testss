const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('default', ['mochachai', 'eslint'], () => {
  console.log('Runs all the tests');
});

gulp.task('mochachai', () => {
  gulp.src('./test/greet_test.js')
    .pipe(mocha());
});

gulp.task('eslint', () => {
  gulp.src('./greet_module.js')
    .pipe(eslint())
    .pipe(eslint.format());
});
