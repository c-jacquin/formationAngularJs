var gulp = require('gulp');
var config = require('./config/gulp.config.js');
var paths = config.paths;

require('./gulp/tests.gulp')(gulp,config,paths);
require('./gulp/dev.gulp')(gulp,config,paths);
require('./gulp/dist.gulp')(gulp,config,paths);

gulp.task('default', ['dev']);
