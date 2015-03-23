var path = require('path');

var protractor = require('gulp-protractor').protractor,
    protractorQA = require('gulp-protractor-qa'),
    karma = require('karma').server;


module.exports = function(gulp,config, paths){

    var pathToKarmaConfigFile = path.resolve(paths.karmaConfigFile);

    gulp.task('unit', function (done) {
        karma.start({
            configFile: pathToKarmaConfigFile,
            singleRun: true,
            autoWatch: false
        }, done);
    });

    gulp.task('tdd', function (done) {
        karma.start({
            configFile: pathToKarmaConfigFile
        }, done);

    });


    gulp.task('e2e', [
        'buildDev',
        'startDevServer'
    ], runProtractor);

    function runProtractor(cb) {
        gulp.src(paths.e2eTests)
            .pipe(protractor({
                configFile: paths.protractorConfigFile,
                args: ['--baseUrl', 'http://localhost:' + config.port]
            }))
            .on('error', function (e) { // Swallow
            })
            .on('end', cb);
    }

    gulp.task('protractor', runProtractor);


    gulp.task('protractor-qa', function () {
        protractorQA.init({
            testSrc: [paths.e2eTests, paths.pageObjects],
            viewSrc: [paths.indexFile, paths.templates]
        });
    });

};