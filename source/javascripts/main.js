'use strict';
import styles from '../sass/app.css'
import swiper from 'swiper'
import App    from './app'
import Init   from './Init'

;(function(){
//import

//var app = new App();

class Main {
  constructor(s){
    //init
    const init = new Init();
    init.refresh();
    console.log(styles);
  }
};

new Main();
})();
