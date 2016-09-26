;(function(){
'use strict';

var util = require('util');
var Super = require('../app');

var Class = function () {
  console.log('const file manege class.');
};
util.inherits(Class,Super);

//shortcut
var p = Class.prototype;

//public

p.getImageFile = function(e){
  var files;
  if(typeof e.dataTransfer == 'undefined'){
    files = e.target.files;
  }else{
    files = e.dataTransfer.files;
  }

  if(files.length >1){
    alert('error');
    return;
  }else if(files.length === 0){
    return null;
  }

  var file = files[0];
  var fileType = file.type;
  if(file.size > p.APP.MAX_UPLOAD_SIZE){
    alert('error');
  }
  if (!fileType.match(/image.*/)) {
    alert('error');
    return;
  }
  //return file;
};

module.exports = Class;
})();
