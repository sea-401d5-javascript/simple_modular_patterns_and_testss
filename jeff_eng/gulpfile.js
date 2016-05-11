const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('default', ['mochachai', 'eslint', 'watch'], () => {
  console.log('Runs all the tests');
});

gulp.task('mochachai', () => {
  gulp.src('./test/greet_test.js')
    .pipe(mocha());
});

gulp.task('eslint', () => {
  gulp.src(['./greet_module.js','./test/greet_test.js','./gulpfile.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('watch', () => {
  gulp.watch('./test/greet_test.js', ['mochachai']);
  gulp.watch(['./*.js','./test/*.js'], ['eslint']);
});
