var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefixer', function () {
  gulp.src('css/*.css')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('css'));

    done();
});

gulp.task('sass', function(){
  return gulp.src('sass/style.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'))
});

gulp.task('minicss', function(){
  return gulp.src('css/style.css')
    .pipe(cssnano())
    .pipe(autoprefixer())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('css/**/*.css', ['minicss']);
});
