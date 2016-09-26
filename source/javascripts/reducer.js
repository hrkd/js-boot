;(function(){
'use strict';

// Action名の定義
var SEND = 'SEND',
    INIT = 'INIT',
    GET_ITEM = 'GET_ITEM',
    GET_POS_START = 'GET_POS_START',
    GET_POS_SUCCESS = 'GET_POS_SUCCESS',
    INIT_SUCCESS = 'INIT_SUCCESS',
    SET_FOCUS= 'SET_FOCUS',
    SET_GENDER= 'SET_GENDER',
    SET_ITEM= 'SET_ITEM',
    SET_COLOR= 'SET_COLOR',
    SET_PICKER= 'SET_PICKER',
    SET_SIZE= 'SET_SIZE',
    SET_POSITION= 'SET_POSITION',
    ACTIVE_OBJ= 'ACTIVE_OBJ',
    SET_PAGE= 'SET_PAGE';

var Class = function(s) {
  console.log('const Action class.');
};

//shortcut
var p = Class.prototype;

//public method

// Reducer
p.formReducer = function(state, action) {
  switch (action.type) {
    case INIT:
      return Object.assign({}, state, {
        isFetching: true
      });
    case SET_PAGE:
      return Object.assign({}, state, {
        page: action.value
      });
    case SET_COLOR:
      return Object.assign({}, state, {
        selectedColor: action.value
      });
    case SET_SIZE:
      return Object.assign({}, state, {
        selectedSize: action.value
      });
    case SET_ITEM:
      return Object.assign({}, state, {
        selectedItem: action.value.item_id,
        selectedColor: action.value.color,
        selectedSize: action.value.size,
        page: 'setColor'
      });
    case SET_POSITION:
      return Object.assign({}, state, {
        selectedPosition: action.value
      });
    case INIT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        designData: action.value
      });
    case SET_FOCUS:
      return Object.assign({}, state, {
        activeObject: action.value,
      });
    case SET_GENDER:
      console.log(action.value);
      return Object.assign({}, state, {
        itemCategory: action.value,
      });
    case SET_PICKER:
      return Object.assign({}, state, {
        activePicker: action.value,
      });
    case SEND:
      return Object.assign({}, state, {
        value: action.value,
      });
    case GET_ITEM:
      return Object.assign({}, state, {
        itemList: action.value,
      });
    case GET_POS_START:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_POS_SUCCESS:
      var selectedPosition;
      action.value.forIn(function(k,v,i){
        if(i === 0){
          selectedPosition = v.woi_id;
        }
      });

      return Object.assign({}, state, {
        isFetching: false,
        pos: action.value,
        selectedPosition: selectedPosition,
        page: 'setWorkPos'
      });
    case ACTIVE_OBJ:
      return Object.assign({}, state, {
        activeObject: action.value
      });
    default:
      return state;
  }
};

//private method
function privateMethod(){
}

module.exports = Class;
})();
