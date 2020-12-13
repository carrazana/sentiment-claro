import React, { Component } from 'react';
import logo from './logoClaro.png';
import './App.css';

// function Hello(props) {
// return <h2>{props.title}</h2>
// }

// const Hello = (props) => <h2>{props.title}</h2>

class Hello extends Component{
  render(){
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component{
  render(){
    const textoSegunBool = this.props.isActivated ? 'On' : 'Off'
    const mappedNumbers = this.props.arrayOfNumbers.map( n => n * 2)
    return(
      <div>
      <p>{mappedNumbers.join(', ')}</p>
      <p>{this.props.objectWithInfo.key}</p>
      </div>
    )
    
    
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title = "Bienvenido a este curso" />

        <Text number = {2} 
        text = "Vamos a aprender React" 
        isActivated
        arrayOfNumbers = {[2,3,10]}
        objectWithInfo = {{key: 'value' ,key2: 'otherValue'}} 
        />

        <p>&#128512;</p>
        <table>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
        </table>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
