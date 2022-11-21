import React from 'react'
import './App.css';
import Logo from './components/Logo/logo';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Logo/>
        <Navbar/>
      </header>

      <body>
        <ItemListContainer className="homeTitle" greeting='Bienvenido a Pizzeria Rosendo'/>
      </body>
    </div>
  

  );
}

export default App;