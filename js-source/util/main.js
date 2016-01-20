var util = require('util');
var Super = require('./base');

var Class;
function Class() {
  Super.call(this);
  console.log('const sub class.');
}

util.inherits(Class,Super);

//public
Super.prototype.yourname = function(){
  console.log(getName());
}

//private
var getName = function(){
  return 'suzuki';
}

module.exports = (function() {
  return Class
})();
