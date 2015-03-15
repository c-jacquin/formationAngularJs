var express = require('express'),
    templateCache = require('gulp-angular-templatecache'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    liveReload = require('gulp-livereload'),
    annotate = require('gulp-ng-annotate'),
    sourceMaps = require('gulp-sourcemaps');

var buildFolder = 'src/build';

module.exports = function(gulp,config, paths){
    gulp.task('dev', [
        'buildDev',
        'startDevServer',
        'watchSource',
        'protractor-qa'
    ]);

    gulp.task('buildDev', [
        'buildJs',
        'cacheTemplates'
    ]);

    gulp.task('buildJs', function () {
        gulp.src(paths.jsSource)
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'))
            .pipe(sourceMaps.init())
            .pipe(concat('all-source.js'))
            .pipe(sourceMaps.write())
            .pipe(gulp.dest(buildFolder))
            .pipe(liveReload());
    });

    gulp.task('cacheTemplates', function () {
        gulp.src(paths.templates)
            .pipe(templateCache({module: 'app'}))
            .pipe(gulp.dest(buildFolder))
            .pipe(liveReload());
    });

    gulp.task('startDevServer', function () {
        var devServer = express();
        devServer.use(express.static(paths.srcFolder));

        devServer.all('/*', function (req, res) {
            res.sendFile('index.html', {root: 'src'});
        });
        devServer.listen(config.port);
    });

    gulp.task('watchSource', function () {
        liveReload.listen();
        gulp.watch(paths.jsSource, ['buildJs']);
        gulp.watch(paths.indexFile, ['reloadIndex']);
        gulp.watch(paths.templates, ['cacheTemplates']);
    });

    gulp.task('reloadIndex', function () {
        gulp.src(paths.indexFile)
            .pipe(liveReload());
    });
};