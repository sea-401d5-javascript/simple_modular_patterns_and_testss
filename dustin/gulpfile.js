const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const watch = require('gulp-watch');

gulp.task('watch', function() {
  gulp.watch('./*.js', ['lint']);
});

gulp.task('default', ['mocha', 'lint', 'watch'], () => {
console.log('task two');
});

gulp.task('lint', () => {
  gulp.src(['./*.js', './test/*.js'])
  .pipe(eslint(eslintrc))  //{} pass in rules
  .pipe(eslint.format())
});

gulp.task('mocha', function () {
	return gulp.src('./test/*.js', {read: false})
		.pipe(mocha({reporter: 'nyan'}));
});


eslintrc = {
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
    "no-var": "error",
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
    "no-underscore-dangle": 0,
    "one-var": [2, {
        // "var": "always", // Exactly one var declaration per function
        "let": "always", // Exactly one let declaration per block
        "const": "never" // Exactly one declarator per const declaration per block
    }]
  }
}
