'use strict';
import React, {Component} from 'react'
import ClassNames from 'classnames'

export default class Wrapper extends Component {
  constructor(s){
    super();
  }

  componentWillMount(){
    this.setState(this.props.data);
  }

  componentWillReceiveProps(nextProps){
    this.setState(nextProps.data);
  }

  render(){
    return (
      <div className="test">
        test
      </div>
    );
  }
}
