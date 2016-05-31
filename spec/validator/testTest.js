var assert = require('power-assert');
var Test = require('../../source/javascript/validator/test');
var test = new Test();

describe('テストコードサンプル実行', function() {
  it('test 1', function () {
    assert(test.transform('input string') === 'output string');
  });

  it('test 2', function () {
    assert(test.transform('input str') === 'output string');
  });
});
