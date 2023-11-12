import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Welcome to Fullstack Development - I ",
      subTitle: "React JS Programming Week09 Lab Exercise",
      stuId: "101369236",
      name: "Rj Rose",
      location: "George Brown College, Toronto"
      
    };
    this.styles = {
      backgroundColor : "white",
      color : "#4dbfe1"
    };
  }



  render() {
    
    return (
      <div className="App">
        <header style={this.styles} className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.title}</h2>
          <p>{this.state.subTitle}</p>
          <p>{this.state.stuId}</p>
          <p>{this.state.name}</p>
          <p>{this.props.locationProp}</p>
        </header>
      </div>
    );
    
  }
  
}
App.defaultProps = {
  locationProp: "George Brown College, Toronto"
}  
export default App;
