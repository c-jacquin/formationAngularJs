var express = require('express'),
    annotate = require('gulp-ng-annotate'),
    usemin = require('gulp-usemin'),
    uglify = require('gulp-uglify'),
    minifyHtml = require('gulp-minify-html'),
    minifyCss = require('gulp-minify-css'),
    rev = require('gulp-rev'),
    awspublish = require('gulp-awspublish');

var s3Config = require('../config/s3.json');

module.exports = function(gulp,config, paths){
    gulp.task('buildDist',[
        'unit'
    ],function(){
        gulp.src('./src/index.html')
            .pipe(usemin({
                css: [minifyCss(),rev()],
                js: [annotate(),uglify(),rev()],
                html: [minifyHtml({empty: true})]
            }))
            .pipe(gulp.dest(paths.dist))
    });

    gulp.task('build',['buildDist'],function(){
        var devServer = express();
        devServer.use(express.static(paths.dist));

        devServer.all('/*', function (req, res) {
            res.sendFile('index.html', {root: 'dist'});
        });
        devServer.listen(config.portDist);
    });

//////////////////
// Deployment //
////////////////

    gulp.task('deploy', function() {

        var publisher = awspublish.create(s3Config);
        var headers = {
            'Cache-Control': 'max-age=5, no-transform, public' // 5 seconds cache TTL
        };
        return gulp.src('dist/**/*')
            .pipe(publisher.publish(headers))
            .pipe(publisher.cache()) // create a cache file to speed up consecutive uploads
            .pipe(awspublish.reporter());
    });
};