var config = require('./gulp.config.js');

exports.config = {

    //seleniumServerJar: '../../node_modules/protractor/selenium/selenium-server-standalone-2.44.0.jar',
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome'
    },

    specs: [config.paths.e2eTests],

    jasmineNodeOpts: {
        showColors: true,
        silent: true // Use jasmine-spec-reporter
    },

    onPrepare: function () {
        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: false,     // display stacktrace for each failed assertion
            displayFailuresSummary: true, // display summary of all failures after execution
            displaySuccessfulSpec: true,  // display each successful spec
            displayFailedSpec: true,      // display each failed spec
            displayPendingSpec: false,    // display each pending spec
            displaySpecDuration: false,   // display each spec duration
            displaySuiteNumber: false     // display each suite number (hierarchical)
        }));
    }
};