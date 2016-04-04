/*
 * utils
 *
 */

;(function(){
"use strict";
var _ = require('underscore');
var Class = function() {
  console.log('const utils class.');
};

//shortcut
var p = Class.prototype;


//public
p.getRatio = function(stageW, stageH, targetW, targetH,type){
  var stageMaxSize = (stageW > stageH)?stageW:stageH;
  var stageMinSize = (stageW > stageH)?stageH:stageW;
  var phMaxSize = (targetW > targetH)?targetW:targetH;
  var phMinSize = (targetW > targetH)?targetH:targetW;

  if(type === 'contain'){
    return (targetW > targetH)?stageMaxSize/phMaxSize:stageMinSize/phMaxSize;
  }else if(type === 'cover'){
    return stageMaxSize/phMinSize;
  }else{
    console.error('type should be "contain" or "cover"');
  }
};

p.template = function(text,data){
  var tmpl = _.template(text);
  return tmpl(data);
};

//min1からmax1内にあるvalをmin2からmax2の間にあった場合に置き換える
//see https://processing.org/reference/map_.html
p.map= function(val, min1,max1,min2,max2){
  var diff1 = max1-min1,
      diff2 = max2-min2,
      raito = max1 / (val-min1);
  return diff2 / raito;
};

p.getStyle= function(obj,styletype){
  if( obj.currentStyle ) { //IE or Opera
    if( styletype.indexOf( "-" ) != -1 ) styletype = styletype.camelize();
      return obj.currentStyle[ styletype ];
  } else if ( getComputedStyle ) { //Mozilla or Opera or Safari
    return document.defaultView.getComputedStyle( obj, '' ).getPropertyValue( styletype );
  }
};

module.exports = (function() {
  return Class;
})();
})();
