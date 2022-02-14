import "./App.css";
import React from "react";
import CalculatorComponent from './components/Calculator/Calculator.js';
import CardComponent from './components/Card/Card.js';

  
class App extends React.Component {
  
  render() {
    return (
      <div>
        <CalculatorComponent/>
        <CardComponent/>,
      </div>
      
    );
  }
}

export default App
