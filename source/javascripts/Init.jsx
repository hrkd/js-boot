'use strict';
import AppView from './view/AppView.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import Wrapper from './view/Wrapper.jsx'
import FileManager from './utils/FileManager'
import {connect, Provider } from 'react-redux'

;(function(){
class Init extends AppView {
  constructor(){
    super();
    console.log('const Init class.');

    let filemanager = new FileManager();

    //prototype拡張
    String.prototype.capitalize = function(){
      return this.charAt(0).toUpperCase() + this.slice(1);
    };

    Object.defineProperty(Object.prototype, "forIn", {
      value: function(fn, self) {
        self = self || this;

        Object.keys(this).forEach(function(key, index) {
          let value = this[key];

          fn.call(self, key, value, index);
        }, this);
      }
    });

    /*
    //APIからデータ取得、保存
    p.observer.on('init',function(){
      p.apiclient.getItemList(function(){
        p.refresh();
      });
    });

    //サーバーにデータを送信
    p.observer.on('submit',function(){
    });

    //初期データの読み込み
    p.observer.trigger('init');
    */
  }

  refresh(){
    ReactDOM.render(
      <Provider store={Init.store}>
        <AppContainer />
      </Provider>,
      document.getElementById('react_container')
    );
  }
}

const mapStateToProps = function(state){
  return {
    data: state
  };
};

const mapDispatchToProps = function(dispatch){
  return {
    onClick: function(value){
      dispatch(p.action.send(value));
    },
    onLoad: function(value){
      dispatch(p.action.initAction(value));
    },
    setFocus: function(value){
      dispatch(p.action.setFocus(value));
    }
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper);

module.exports = Init;
})();
