var webpackConfig = require('@vue/cli-service/webpack.config.js')
const path = require('path')

module.exports = function (config) {
    config.set({
        frameworks: ['mocha'],

        files: [
            'tests/**/*.spec.js'
        ],

        preprocessors: {
            '**/*.spec.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        reporters: ['spec'],
        autoWatch: true,

        browsers: ['ChromeHeadless']

    })
}
