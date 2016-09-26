;(function(){
'use strict';


var Class = function(s) {
  console.log('const Action class.');
};

//shortcut
var p = Class.prototype;

//public method

// Action Creators
var SEND = 'SEND';
p.send = function(value) {
  return {
    type: SEND,
    value: value
  };
};

var SET_PAGE= 'SET_PAGE';
p.setPage= function(value) {
  return {
    type: SET_PAGE,
    value: value
  };
};

var SET_GENDER= 'SET_GENDER';
p.setGender = function(value) {
  return {
    type: SET_GENDER,
    value: value
  };
};

var SET_PICKER= 'SET_PICKER';
p.setPicker = function(value) {
  return {
    type: SET_PICKER,
    value: value
  };
};

var SET_COLOR= 'SET_COLOR';
p.setColor= function(value) {
  return {
    type: SET_COLOR,
    value: value
  };
};

var SET_SIZE= 'SET_SIZE';
p.setSize= function(value) {
  return {
    type: SET_SIZE,
    value: value
  };
};

var SET_FOCUS= 'SET_FOCUS';
p.setFocus = function(value) {
  return {
    type: SET_FOCUS,
    value: value
  };
};

var SET_ITEM= 'SET_ITEM';
p.setItem= function(value) {
  return {
    type: SET_ITEM,
    value: value
  };
};

var SET_POSITION= 'SET_POSITION';
p.setPosition= function(value) {
  return {
    type: SET_POSITION,
    value: value
  };
};

var GET_ITEM = 'GET_ITEM';
p.getItems = function(value) {
  return {
    type: GET_ITEM,
    value: value
  };
};

var INIT = 'INIT';
p.initAction = function(value) {
  return {
    type: INIT,
    value: value
  };
};

var INIT_SUCCESS = 'INIT_SUCCESS';
p.initActionSuccess = function(value) {
  return {
    type: INIT_SUCCESS,
    value: value
  };
};

var GET_POS_START = 'GET_POS_START';
p.getPosStart = function() {
  return {
    type: GET_POS_START
  };
};

var GET_POS_SUCCESS = 'GET_POS_SUCCESS';
p.getPosSuccess = function(value) {
  return {
    type: GET_POS_SUCCESS,
    value: value
  };
};

var ACTIVE_OBJ= 'ACTIVE_OBJ';
p.setActiveObject = function(value) {
  return {
    type: ACTIVE_OBJ,
    value: value
  };
};

//private method
function privateMethod(){
}

module.exports = Class;
})();
