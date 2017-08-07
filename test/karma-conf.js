module.exports = function(config){
    config.set({
    //  root path location that will be used to resolve all relative paths in files and exclude sections, should be the root of your project
    basePath : '../',

    // files to include, ordered by dependencies
    files : [
      // include relevant Angular files and libs
      'bower-angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
      'myApp.module.js',
      'states-routing/form.js',
      // 'test/lib/angular/angular-mocks.js',

      // include js files
      '*.js',
      'states-routing/*.js',
      'data-storage/*.js',

      // include unit test specs
      'data-storage/data.tests.js',
      'data-storage/srvc.test.js',
      'states-routing/form.tests.js',
    ],
    // files to exclude
    exclude : [
      'app/lib/angular/angular-loader.js'
      , 'app/lib/angular/*.min.js'
      , 'app/lib/angular/angular-scenario.js'
    ],

    // karma has its own autoWatch feature but Grunt watch can also do this
    autoWatch : false,

    // testing framework, be sure to install the karma plugin
    frameworks: ['jasmine'],

    // browsers to test against, be sure to install the correct karma browser launcher plugin
    browsers : ['Chrome', 'PhantomJS', 'Firefox'],

    // progress is the default reporter
    reporters: ['progress', 'coverage', 'threshold'],

    // map of preprocessors that is used mostly for plugins
    preprocessors: {
'data-storage/*.js': 'coverage',
'states-routing/*.js': 'coverage'
    },

    coverageReporter: {
      type : 'text',
 dir : 'coverage/',
 file : 'coverage.txt'
    },


    thresholdReporter: {
        statements: 10,
        branches: 0,
        functions: 10,
        lines: 10
    },
    // list of karma plugins
    plugins : [
        'karma-junit-reporter',
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-jasmine',
        'karma-phantomjs-launcher',
        'karma-coverage',
        'karma-threshold-reporter'
    ]
})}
