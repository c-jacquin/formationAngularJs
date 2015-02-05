var config = {
    port: 3000,
    paths: {
        srcFolder: 'src',
        jsSource: ['src/app/**/*.js', '!src/app/**/*.spec.js'],
        indexFile: 'src/index.html',
        templates: 'src/app/**/*.html',
        unitTests: 'src/app/**/*.spec.js',
        karmaConfigFile: 'config/karma.config.js',
        e2eTests: 'test-e2e/**/*.spec.js',
        pageObjects: 'test-e2e/**/*.page.js',
        protractorConfigFile: 'config/protractor.config.js',
        mockBackendData: 'src/mock-backend/data/**/*.js'
    }
};

module.exports = config;