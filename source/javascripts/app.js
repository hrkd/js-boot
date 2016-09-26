'use strict';
import Observer  from './utils/Observer';
import Action    from './action';
import Reducer   from './reducer';
import {createStore}   from 'redux';

;(function(APP){

var initialState = {
  value: null,
  activePicker: null,
  activeObject: null,
  page: 'setItem',
  itemCategory: 'WOMEN',
  selectedItem: null,
  selectedColor: null,
  selectedSize: null,
  selectedPosition: null,
  isFetching: false
};

class Super {
  constructor(s){
    console.log('Init App');
  }
};

//shortcut
Super.action = new Action();
Super.reducer = new Reducer();

//store
Super.store = createStore(
  Super.reducer.formReducer,
  initialState
);

Super.store.subscribe(function(){
  console.log('STATE >>> ',Super.store.getState());
});

Super.observer = new Observer();

Super.APP = {
  NAME : '',
  API_URL:   getApiBase(),
  ASSET_BASE:getAssetBase(),
  IS_SSL :   location.protocol.indexOf('https') !== -1,
  ENV:       getEnv(),
  PROTOCOL : getProtocol(),
  SUPPORT: {
    IOS_MIN: 7.0,
    ANDROID_MIN: 4.2,
    IE_MIN: 11.0
  },
  MAX_UPLOAD_SIZE: 1000000 //1MB
};

function getEnv(){
  if(location.hostname == 'localhost'){
    return 'DEV';
  }else if(location.hostname == ''){
    return 'STAGING';
  }else{
    return 'PRODUCTION';
  }
}

function getAssetBase(){
  switch(getEnv()){
    case 'DEV':
      return '/';
    case 'STAGING':
      return '/';
    case 'PRODUCTION':
      return '/';
  }
}

function getApiBase(){
  switch(getEnv()){
    case 'DEV':
      return '/';
    case 'STAGING':
      return '/api/';
    case 'PRODUCTION':
      return '/';
  }
}

function getProtocol(){
  switch(getEnv()){
    case 'DEV':
      return 'http';
    case 'STAGING':
      return 'http';
    case 'PRODUCTION':
      return 'http';
  }
}

module.exports = Super;
})();
