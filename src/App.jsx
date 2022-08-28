import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './components/ItemCount/ItemCount.css';



function App() {
  
  return (
    <div>
      <NavBar />
      <ItemListContainer 
        saludo={'Bienvenido a productos Flight Radar'}
      />
    </div>
  );
}


export default App;