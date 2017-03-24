/* eslint-env node  */

var wallabyWebpack = require('wallaby-webpack');
var wallabyPostprocessor = wallabyWebpack({
  entryPatterns: ['test/unit/setup.js', 'test/unit/**/*.spec.js']
});

module.exports = function (wallaby) {
  return {
    files: [
      // {pattern: 'node_modules/bluebird/js/browser/bluebird.core.js', instrument: false},
      {pattern: "src/**/*.js", load: false},
      {pattern: "test/stubs/**/*.js", load: false},
      {pattern: "test/unit/setup.js", load: false},
    ],

    tests: [
      {pattern: "test/unit/**/*.spec.js", load: false}
    ],

    env: {
      kind: "electron"
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        "presets": [
          ["es2015", { "loose": true }],
          "stage-1"
        ],
        plugins: [
          "syntax-flow",
          "transform-decorators-legacy",
          "transform-flow-strip-types",
          "transform-es2015-modules-amd"
        ]}
      )
    },

    postprocessor: wallabyPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    }
  };
};
