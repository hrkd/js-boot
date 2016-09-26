;(function(){
'use strict';
var util = require('util');
var Super  = require('../app');

var Class = function(s) {};
util.inherits(Class,Super);

//shortcut
var p = Class.prototype;

p.load = function(imageSrc,callback){
  //Loader
  var loader=new createjs.LoadQueue(true);
  var container = new createjs.Container();

  loader.addEventListener("fileload",function(e){
    console.log('fileload');
    var image = new createjs.Bitmap(e.item.src);
    container.name = 'image';
    image.image.onload=function(e){
      console.log('onload image');
      container.addChild(image);
      callback(container);
    };
  });

  loader.addEventListener("complete",function(e){
    console.log('complete');
    loader.removeEventListener("fileload");
    loader.removeEventListener("complete");
  });

  //Manifestを使用、manifest読み込み開始
  loader.loadManifest([
    {src:imageSrc}
  ]);
};

module.exports = Class;
})();

