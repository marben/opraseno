var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps')

var sassDir = './scss/*.scss';
var cssDir = './static/css';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('watch', function() {
  gulp.watch(sassDir, ['sass']);
});

gulp.task('default', ['sass', 'watch']);

gulp.task('sass', function() {
  return gulp
    .src(sassDir)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(cssDir));
});

gulp.task('hello', function() {
  console.log("Hello gulp!");
});
