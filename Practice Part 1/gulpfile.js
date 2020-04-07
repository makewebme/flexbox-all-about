'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const bs = require('browser-sync').create()



// SCSS
gulp.task('scss', function styles() {
  return gulp.src('src/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
    .pipe(bs.stream())
})


// BrowserSync
gulp.task('bs', function() {
  bs.init({
    server: {
      baseDir: 'dist'
    }
  })
})


// Watch
gulp.task('watch', function watch() {
  gulp.watch('src/*.scss', gulp.series('scss'))
})


// Default
gulp.task(
  'default',
  gulp.parallel(
    gulp.series('scss', 'watch'),
    'bs'
  )
)
