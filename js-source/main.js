;(function(){
var App = require('./app');
var AppModel = require('./model/appmodel');
var appmodel = new AppModel();

appmodel.apiclient().done(function(data){
  console.log(data);
});

console.log(App.NAME);
})();
