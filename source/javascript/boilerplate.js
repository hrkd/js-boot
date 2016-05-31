;(function(){
'use strict';

var Class = function(s) {
  console.log('const class.');
};

//shortcut
var p = Class.prototype;

//public method
p.publicMethod = function(){
};

//private method
function privateMethod(){
}

module.exports = Class;
})();
