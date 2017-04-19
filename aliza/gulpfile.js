const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require ('gulp-mocha');

gulp.task('default', ['lint', 'mocha'], () => {
  console.log('default for lint and mocha');
});


gulp.task('lint', () => {
  gulp.src('/*.js')
    .pipe(eslint({}))
    .pipe(eslint.format())
});

gulp.task('mocha', () => {
	gulp.src('test/test.js')
		.pipe(mocha());
});

gulp.watch('./*', ['lint', 'mocha']);
