exports.config = {

  specs: ['tests/tests/*.js'],

  capabilities: {
    'shardTestFiles': true,
    'maxInstances': 1,
    'browserName': 'chrome'
  },

  framework: 'jasmine2',
  seleniumAddress: 'http://127.0.0.1:4444',
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  plugins: [{
    package: 'protractor-console',
    logLevels: ['severe']
  }]
};