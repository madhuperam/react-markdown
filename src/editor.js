import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";

class Editor extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      maximize: true,
      minimize: false
    }
  }
}

export default Editor;
