Package.describe({
  name: 'smardo:rest',
  version: '1.1.4',

  // Brief, one-line summary of the package.
  summary: 'The easiest way to add a REST API to your Meteor app',

  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/stubailo/meteor-rest/blob/master/packages/rest/',

  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Package.onUse(function (api) {
  api.versionsFrom('2.16');

  api.use([
    'check',
    'ddp',
    'ejson',
    'mongo@1.0.0 || 2.0.0',
    'simple:json-routes@3.0.0',
    'underscore',
    'webapp@1.13.8 || 2.0.0',
  ], 'server');

  api.use([
    'accounts-base@2.0.0 || 3.0.0',
  ], 'server', {weak: true});

  api.addFiles([
    'http-connection.js',
    'http-subscription.js',
    'rest.js',
    'list-api.js',
  ], 'server');

  api.export('SimpleRest');
});

Package.onTest(function (api) {
  api.use([
    'check',
    'http',
    'jquery',
    'mongo@1.0.0 || 2.0.0',
    'random',
    'simple:json-routes',
    'simple:rest',
    'simple:rest-accounts-password',
    'simple:rest-json-error-handler',
    'test-helpers',
    'tinytest',
    'underscore',
  ]);

  api.addFiles('rest-tests.js');
});
