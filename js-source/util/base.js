var Class;
function Class() {
  console.log('const super class.');
}

//public
Class.prototype.myname = function() {
  console.log(getName());
};

//private
var getName = function(){
  return 'sato';
}

module.exports = (function() {
  return Class
})();
