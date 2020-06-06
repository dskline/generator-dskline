'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-dskline:ts-node', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/ts-node'))
      .withPrompts({ projectName: 'hello-world' });
  });

  it('creates files', () => {
    assert.file(['package.json', 'tsconfig.json', 'src/index.ts']);
  });

  it('inserts project name', () => {
    assert.fileContent('package.json', `"name": "hello-world"`)
  })
});
