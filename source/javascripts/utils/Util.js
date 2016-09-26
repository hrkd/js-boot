;(function(){
'use strict';
//import

//constractor
var Class = function() {
};
//shortcut
var p = Class.prototype;

//public
p.publicMethod = function () {
  return 'abc';
};

//private
function privateMethod(selector){
}

//export
module.exports = Class;
})();
