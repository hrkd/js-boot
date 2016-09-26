;(function(){
'use strict';
var util = require('util');
var Super  = require('../app');

var Class = function(s) {};
util.inherits(Class,Super);

//shortcut
var p = Class.prototype;

p.generator = function(string){
  var space = '';
  //var space = String.fromCharCode(8202); //thin spaceで文字をあける
  var textContainer = new createjs.Container();
  textContainer.name = 'tcon';
  var text = new createjs.Text(
    (string).split("").join(space),
    "100 60px my_font_01",
    "#00CED1"
  );
  text.name = 'text';

  var hitAreaShape = new createjs.Shape();
  hitAreaShape.set({
    graphics: new createjs.Graphics().beginFill("blue").drawRect(0,0,text.getMeasuredWidth(),text.getMeasuredHeight())
  });
  //text.set({
  //  hitArea: hitAreaShape
  //});
  textContainer.addChild(hitAreaShape);
  textContainer.addChild(text);
  return textContainer;
};

module.exports = Class;
})();
