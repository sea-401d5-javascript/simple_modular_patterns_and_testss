const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha')

gulp.task("first_task", [], () => {
  console.log("TASK");
});

gulp.task("default", ['lint', 'test'], () => {
  console.log("Default TASK");
});

gulp.task('lint', () => {
  gulp.src('./greet.js')
    .pipe(eslint({}))
    .pipe(eslint.format())

  gulp.src('./index.js')
    .pipe(eslint({
      parserOptions: {
        "ecmaVersion": 6
      },
      envs: [
        'mocha'
      ]
    }))
    .pipe(eslint.format())
})

gulp.task('test', () => {
  gulp.src('test/**/*test.js')
    .pipe(mocha({
      reporter: 'nyan'
    }));
});
