/*
 * deviceHandler
 *
 */

;(function(){
"use strict";
var util = require('util');
var Super = require('../app');

var woothee = require('woothee');
var spWidthLimit = 420;

var Class=function () {
  console.log('const device handler class.');
  this.width  = window.screen.width;
  this.height = window.screen.height;

  this.ratio = window.devicePixelRatio;
};
util.inherits(Class,Super);

//shortcut
var p = Class.prototype;

//public
p.getUa = function() {
  var ua = woothee.parse(window.navigator.userAgent);
  ua.version_float = getVersionFloat(ua.version);
  ua.version_int = getVersionInt(ua.version);
  ua.os_version_float = getVersionFloat(ua.os_version);
  ua.os_version_int = getVersionInt(ua.os_version);

  return ua;
};

p.isSp = function() {
  if(this.getUa().category === 'pc'){
    return false;
  }
  //spWidthLimit以下しかSPとみなさない
  if(this.isLandscape()){
    return this.height < spWidthLimit;
  }else{
    return this.width  < spWidthLimit;
  }
};

p.isAndroidDefault = function() {
  return this.getUa().name == 'Safari' && this.getUa().os == 'Android';
};

p.isLandscape = function() {
  this.width  = window.screen.width;
  this.height = window.screen.height;
  return this.width > this.height;
};

p.supported = function() {
  var supported = true;
  //Android標準ブラウザ
  if(this.isAndroidDefault()){
    supported = false;
  //Android
  }else if(this.getUa().os == 'Android' && this.getUa().os_version_float < p.APP.SUPPORT.ANDROID_MIN){
    supported = false;
  //iOS
  }else if((this.getUa().os == 'iPhone' || this.getUa().os == 'iPad' )&& this.getUa().os_version_float < p.APP.SUPPORT.IOS_MIN){
    supported = false;
  //IE
  }else if(this.getUa().name == 'Internet Explorer' && this.getUa().version_float < p.APP.SUPPORT.IE_MIN){
    supported = false;
  }
  return supported;
};

p.isMultiGestureSupport = function() {
  return (this.getUa().os == 'Android' && this.getUa().os_version_float > 5.0) || (this.getUa().os == 'iPhone' && this.getUa().os_version_float > 8.0);
};

//private
function getVersionFloat(version){
  var version_ary = version.split('.');
  var version_int = parseInt(version_ary.shift(),10);
  return parseFloat(version_int +'.'+ version_ary.join(''));
}

function getVersionInt(version){
  var version_ary = version.split('.');
  return parseInt(version_ary.shift(),10);
}

module.exports = Class;
})();
