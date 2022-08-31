import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './components/ItemCount/ItemCount.css';
import { BrowserRouter } from 'react-router-dom';



function App() {
  
  return (
    <BrowserRouter>
      <NavBar />
      <ItemListContainer 
        saludo={'Bienvenido a productos Flight Radar'}
      />
      <ItemDetailContainer id={3} />
    </BrowserRouter>
  );
}


export default App;