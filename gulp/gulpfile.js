const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const flexBugsFixies = require('postcss-flexbugs-fixes')
const cssWring = require('csswring')
const plumber = require('gulp-plumber')

const autoprefixerOption = {
  grid: true
}

const postcssOption = [
  flexBugsFixies,
  autoprefixer(autoprefixerOption),
  cssWring
]

gulp.task('sass', () => {
  return gulp.src('../src/web/_assets/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss(postcssOption))
    .pipe(gulp.dest('../src/web/_assets/css'))
});

gulp.task('watch', () => {
  return gulp.watch('../src/web/_assets/scss/**/*.scss', ['sass']);
});

