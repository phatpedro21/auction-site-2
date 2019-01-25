var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var babelify = require('babelify');

gulp.task('live-server', gulp.series(function () {
    var server = new LiveServer('server/server.js');
    server.start();
}))


gulp.task('copy', gulp.series(function () {
    return gulp.src(['app/*.css'])
        .pipe(gulp.dest('./build'));
}))

gulp.task('bundle', gulp.series('copy', function () {
    return browserify({
        entries: 'app/main.jsx',
        debug: true,
    })
        .transform(babelify)
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./build'));
}))


gulp.task('serve', gulp.series('bundle', gulp.parallel('live-server', function () {
    browserSync.init(null, {
        proxy: "http://localhost:7777",
        port: 9001
    })
})))