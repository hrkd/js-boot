var assert = require('power-assert');
var AppModel = require('../../js-source/model/appmodel');

var appmodel = new AppModel();

describe('テストの実行', function() {
  it('1+1は2であるべき！', function () {
    assert(1 + 1 !== 3);
  });

  it('nameはsato', function () {
    assert(appmodel.myname() === 'sato');
  });
});

