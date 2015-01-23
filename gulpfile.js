var express = require('express'),
    gulp = require('gulp'),
    templateCache = require('gulp-angular-templatecache'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    liveReload = require('gulp-livereload'),
    sourceMaps = require('gulp-sourcemaps');

var config = require('./gulp.config');
var path = config.path;

var buildFolder = 'src/build';

// DEV SERVER
var devServer = express();
devServer.use(express.static(path.srcFolder));


devServer.all('/*', function (req, res) {
    res.sendFile('index.html', {root: 'src'});
});

gulp.task('default', ['dev'], function () {
});

gulp.task('dev', [
    'buildDev',
    'startDevServer',
    'watch'
], function () {
});

gulp.task('buildDev', [
    'buildJs',
    'cacheTemplates'
], function () {
});

gulp.task('buildJs', function () {
    gulp.src(path.jsSource)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(sourceMaps.init())
        .pipe(concat('all-source.js'))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(buildFolder))
        .pipe(liveReload());
});

gulp.task('cacheTemplates', function () {
    gulp.src(path.templates)
        .pipe(templateCache({module: 'app'}))
        .pipe(gulp.dest(buildFolder))
        .pipe(liveReload());
});

gulp.task('startDevServer', function () {
    devServer.listen(config.port);
});

gulp.task('watch', function () {
    liveReload.listen();
    gulp.watch(path.jsSource, ['buildJs']);
    gulp.watch(path.indexFile, ['reloadIndex']);
    gulp.watch(path.templates, ['cacheTemplates']);
});

gulp.task('reloadIndex', function () {
    gulp.src(path.indexFile)
        .pipe(liveReload());
});