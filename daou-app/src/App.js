import React from 'react';
import logo from './logo.svg';
import './App.css';

const Saluda = props => {
  console.log(props)
  return <h2>Hola {props.name} </h2>
};

function App() {
  const hola = <h2>Hola mundo React </h2>
  return (
    <div className="App">
      <header className="App-header">
                  <Saluda name="boggii" age={23} />
                  <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
