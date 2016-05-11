const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('lint', () => {
  gulp.src('./name.js')
    .pipe(eslint({
      "ecmaVersion": 6
    }))
    .pipe(eslint.format());
});

gulp.task('default', function () {
  gulp.src('test/test.js')
		// gulp-mocha needs filepaths so you can't have any plugins before it
		.pipe(mocha());
});
