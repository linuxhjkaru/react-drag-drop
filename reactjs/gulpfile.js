var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify = require('reactify');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');

var path = {
  MINIFIED_VER: '../reactjs-app.min.js',
  DEST: './',
  ENTRY_POINT: './app.jsx'
};

gulp.task('watch', ['build'], function() {
  gulp.watch(['./**/*.js', './**/*.jsx'], ['build']);
});

gulp.task('build', function(){
  return browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify]
  })
    .bundle()
    .pipe(source(path.MINIFIED_VER))
    // .pipe(streamify(uglify({file: path.MINIFIED_VER})))
    .pipe(gulp.dest(path.DEST));
})

gulp.task('default', ['build']);
