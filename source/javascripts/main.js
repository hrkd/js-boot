'use strict';
import swiper from 'swiper';
import App from './app';
import Init from'./Init.jsx';

;(function(){
//import

//var app = new App();

class Main {
  constructor(s){
    //init
    const init = new Init();
    init.refresh();
  }
};

new Main();
})();
