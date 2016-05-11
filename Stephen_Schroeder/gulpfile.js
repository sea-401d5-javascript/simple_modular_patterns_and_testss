const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

gulp.task('lint', () => {
  return gulp.src(['**/*.js', '!node_modules'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('test', () => {
  return gulp.src('./test/**.js', { read: false })
  .pipe(mocha({ reporter: 'nyan' }));
});

gulp.task('watch', () => {
  gulp.watch('greet.js', ['lint', 'test']);
});

gulp.task('default', ['watch', 'lint', 'test'], () => {
  console.log('You got lucky sucka!');
});
