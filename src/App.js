import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Calculadora from './components/Calculadora'
import Calculadora2 from './components/Calculadora2'

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <div className="d-flex justify-content-center flex-fill mx-auto container"> 
          <Calculadora valor1="0" valor2="0"> 
          
          </Calculadora>
          <Calculadora2 valor1="0" valor2="0"> 
          
          </Calculadora2>
        </div>
        <div >
          <h5 className="d-flex justify-content-center alert alert-secondary">Camila Lordelo</h5>
        </div>
      </div>
    );
  }
}

export default App;
