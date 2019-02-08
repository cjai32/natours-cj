const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


gulp.task('default', function () {
    browserSync.init({
        server: './'
    });
   gulp.watch('sass/**/*.scss', gulp.series('styles'));
   gulp.watch(['index.html']).on('change',browserSync.reload);
  
});

gulp.task('styles', function () {

    return gulp.src('sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.stream());
});