;(function(){
'use strict';
var util = require('util');
var Super  = require('../app');

var Class = function(s) {};
util.inherits(Class,Super);

//shortcut
var p = Class.prototype;

p.init = function(target,stage,mousedown,pressmove,pressup){
  var dragPointX;
  var dragPointY;
  // インタラクティブの設定
  target.addEventListener("mousedown", handleDown);
  target.addEventListener("pressmove", handleMove);
  target.addEventListener("pressup", handleUp);

  // ボールを押したときの処理です
  function handleDown(e) {
    console.log('pressdown');
    //アクティブなオブジェクトとして登録
    p.store.dispatch(p.action.setActiveObject(target));

    dragPointX = stage.mouseX - e.currentTarget.x;
    dragPointY = stage.mouseY - e.currentTarget.y;
    mousedown();
  }

  // ボールを押した状態で動かしたときの処理です
  function handleMove(e) {
    console.log('move');
    if(p.store.getState().activeObject !== target){
      return;
    }

    e.currentTarget.x = stage.mouseX - dragPointX;
    e.currentTarget.y = stage.mouseY - dragPointY;
    pressmove();
    stage.update();
  }

  // ボールからマウスを離したときの処理です
  function handleUp(e) {
    console.log('pressup');
    pressup();

    if(p.store.getState().activeObject !== target){
      //p.store.getState().activeObject.removeChild(sh);
      return;
    }

  }
};

module.exports = Class;
})();

