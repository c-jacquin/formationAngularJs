var config = {
    port: 3000,
    paths: {
        srcFolder: 'src',
        jsSource: 'src/app/**/*.js',
        indexFile: 'src/index.html',
        templates: 'src/app/**/*.html',
        unitTests: 'test/unit/**/*.spec.js',
        karmaConfigFile: 'test/unit/karma.config.js',
        e2eTests: 'test/e2e/**/*.spec.js',
        pageObjects: 'test/e2e/**/*.page.js',
        protractorConfigFile: 'test/e2e/protractor.config.js'
    }
};

module.exports = config;