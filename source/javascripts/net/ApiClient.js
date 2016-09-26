/*
 * apiClient
 *
 */

;(function(){
'use strict';
var util = require('util');
var Super = require('../app');
var $ = require('jquery');
var Data = require('./data');
var data = new Data();

var jsSHA = require("jssha");

var Class = function() {
  console.log('const api client class.');
};
util.inherits(Class,Super);

//shortcut
var p = Class.prototype;

//public
p.getItemList = function(callback) {
  if(p.APP.ENV == "DEV"){
    setTimeout(function() { 
      p.store.dispatch(p.action.getItems(data['itemList']));
      callback();
    }, 500);
  }
};

p.getWorkPos = function(callback) {
  if(p.APP.ENV == "DEV"){
    p.store.dispatch(p.action.getPosStart());
    setTimeout(function() {
      p.store.dispatch(p.action.getPosSuccess(data['workPos']));
      callback(data['workPos']);
    }, 500);
  }
};

p.init = function(callback) {
  if(p.APP.ENV == "DEV"){
    p.store.dispatch(p.action.initAction());
    setTimeout(function() { 
      p.store.dispatch(p.action.initActionSuccess(data['init']));
      p.store.dispatch(p.action.setPage('design'));
      callback(data['init']);
    }, 500);
  }
};

p.get = function(endpoint,callback) {
  /*
  var options = {
    url: p.APP.API_URL+'get'+endpoint.capitalize(),
    type: 'GET',
    data:{},
    dataType: 'json'
  };
  return $.ajax(options);
  * */
};

p.postFile = function(item_code,original_text,image,success,error) {
  var endpoint;
  var effect_type = '[[2]]';
  if(p.APP.env === 'DEV'){
    endpoint = 'success.json';
  }else{
    endpoint = 'material_designs/web';
  }

  var formData = new FormData();
  formData.append("effect_type",effect_type);
  formData.append("original_text", original_text);
  formData.append("item_code", item_code);
  formData.append("lang", 'ja');
  formData.append("print_image", image.blob);

  //The hash type can be one of SHA-1, SHA-224, SHA-256, SHA-384, or SHA-512.
  //The input type can be one of HEX, TEXT, B64, or BYTES
  var shaObj = new jsSHA("SHA-1", "TEXT");
  var txt = effect_type + original_text + image.bytesForHash.join('');
  shaObj.update(txt);
  //B64, HEX, or BYTES
  var hash = shaObj.getHash("HEX");
  formData.append("hash", hash);

  var request = new XMLHttpRequest();
  request.open("POST", p.APP.API_URL+endpoint);
  request.onload = function (e) {
    if (e.target.readyState === 4) {
      if (e.target.status === 200) {
        success(JSON.parse(e.target.responseText));
      } else {
        error(e.target.statusText);
      }
    }
  };
  request.onerror = function (e) {
    error(e.target.statusText);
  };
  request.send(formData);
};

//private

//export
module.exports = Class;
})();
