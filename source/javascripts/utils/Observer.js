;(function(){
'use strict';

var Class = function(s) {
  console.log('const Observer class.');
};

//shortcut
var p = Class.prototype;

//public method
p.listeners = {};

p.on = function(event,func){
  if(!this.listeners[event]){
    this.listeners[event] = [];
  }
  this.listeners[event].push(func);
};

p.off = function(event,func){
  var ref = this.listeners[event],
      len = ref.length;
  for(var i=0;i<len;i++){
    var listener = ref[i];
    if(listener === func){
      this.listeners.splice(i,1);
    }
  }
};

p.trigger = function(event) {
  var ref = this.listeners[event],
      len;
  if(typeof ref !== 'undefined'){
    len = ref.length;
  }else{
    len = 0;
    console.warn('EVENT >> "'+event+'" is undefined');
  }

  for(var i=0;i<len;i++){
    var listener = ref[i];
    if(typeof listener === 'function'){
      console.log('EVENT >> '+event);
      listener();
    }
  }
};

//private method
function privateMethod(){
}

module.exports = (function() {
  return Class;
})();
})();
