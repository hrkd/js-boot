;(function(){
var $ = require('jquery');
var Class;

function Class() {
  console.log('const super class.');
}

//public
Class.prototype.myname = function() {
  return getName();
};

//public
Class.prototype.apiclient = function() {
  return $.ajax('/');
};

//private
var getName = function(){
  return 'sato';
}

module.exports = (function() {
  return Class
})();
})();
