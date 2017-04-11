import React, {Component} from 'react';
import {Link} from 'react-router'
import {Footer} from 'react-materialize';
import '../../resource/template.css'


class Footer_new extends React.Component{
  render(){
return (
    <div>
    {this.props.children}
    </div>
    );
 }
}
export default Footer_new;