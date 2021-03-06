/* globals describe,it,before */
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-data-analysis:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({name: 'test', env: 'test', initGit: false, createEnv: false})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      '.gitignore',
      '.env',
      'environment.yml',
      'scripts/.gitkeep',
      'data/.gitkeep'
    ]);
  });
});
