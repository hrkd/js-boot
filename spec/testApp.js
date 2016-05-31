var assert = require('power-assert');
var App = require('../source/javascript/app');

describe('テスト実行', function() {
  it('app nameはthis app name', function () {
    assert(App.NAME === 'this app name');
  });
});
