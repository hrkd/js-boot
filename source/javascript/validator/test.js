;(function(){
'use strict';

var Class = function(s) {
  console.log('const class.');
};

//shortcut
var p = Class.prototype;

//public method
p.transform= function(inputStr){
  return 'output string';
};

//private method
function privateMethod(){
}

module.exports = Class;
})();
