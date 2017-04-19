const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('test_task', () => {
  return gulp.src('./test/test.js')
    .pipe(mocha())
});

gulp.task('default', ['test_task', 'lint', 'watch'])

gulp.task('lint', () => {
  gulp.src(['./greet.js', './test/test.js', './gulpfile.js'])
    .pipe(eslint({

   "settings": {
    "ecmascript": 5
    },
  "ecmaFeatures": {
    },
  "env": {
    "browser": true,
    "jquery": true
    },
  "rules": {
    "semi": 1,
    "strict": 0,
    "indent": [2, 2],
    "quotes": [1, "single"],
    "no-multi-spaces": [1, {
      "exceptions": {
        "VariableDeclarator": true,
        "FunctionExpression": true
        }
      }],
    "key-spacing": [0, {"align": "value"}],
    "no-underscore-dangle": 0
  }
}))
    .pipe(eslint.format())
});

gulp.task('watch', () => {
  gulp.watch(['./greet.js', './test/test.js'], ['test_task'])
})
