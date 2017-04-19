const gulp = require('gulp');
const mocha = require('gulp-mocha');
const lint = require('gulp-eslint');
const merge = require('merge-stream');

const gulpFiles = {
  testFilesSrc: './test/greet-test.js',
  greetSrc: './greet.js'
}

const opts = {
   'extends': 'eslint:recommended',
   'ecmaFeatures': {
     'modules': true
   },
   'rules': {
     'no-alert': 0,
     'no-bitwise': 0,
     'camelcase': 1,
     'no-console': 1,
     'curly': 1,
     'eqeqeq': 0,
     'no-eq-null': 0,
     'guard-for-in': 1,
     'no-empty': 1,
     'no-use-before-define': 0,
     'no-obj-calls': 2,
     'no-unused-vars': 0,
     'new-cap': 1,
     'no-shadow': 0,
     'strict': 1,
     'no-invalid-regexp': 2,
     'comma-dangle': 2,
     'no-undef': 1,
     'no-new': 1,
     'no-extra-semi': 1,
     'no-debugger': 2,
     'no-caller': 1,
     'semi': 1,
     'quotes': 0,
     'no-unreachable': 2
   },

   'globals': {
     '$': false
   },

   'env': {
     'node': true,
     'es6': true
   }
 }


gulp.task('linter' , () => {
   var greet = gulp.src(gulpFiles.greetSrc)
   .pipe(lint(opts))
   .pipe(lint.format());
   var greetTest = gulp.src(gulpFiles.testFilesSrc)
   .pipe(lint(opts))
   .pipe(lint.format());

   return merge(greet, greetTest);
})

gulp.task('tests', () => {
  return gulp.src(gulpFiles.testFilesSrc, {read: false})
    .pipe(mocha({reporter: 'nyan'}));
})

gulp.task('watch', () => {
  gulp.watch(gulpFiles.testFilesSrc, ['linter', 'tests']);
  gulp.watch(gulpFiles.greetSrc, ['linter', 'tests']);
})

gulp.task('default', ['watch', 'linter', 'tests'], () => {
  console.log('All tasks completed successfully')
});
