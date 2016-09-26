'use strict';
import ClassNames from 'classnames'
import Block from 'bem-cn'
import Super from '../app'
import ApiClient from '../net/ApiClient'

;(function(){

class AppView extends Super {
  constructor(s){
    super();
    console.log('const AppView class.');
  }
}

AppView.apiclient = new ApiClient();
AppView.block = Block;
AppView.ClassNames = ClassNames;

Block.setup({
    el: '__',
    mod: '--',
    modValue: '-'
});

module.exports = AppView;
})();
