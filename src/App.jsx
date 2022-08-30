import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './components/ItemCount/ItemCount.css';



function App() {
  
  return (
    <div>
      <NavBar />
      <ItemListContainer 
        saludo={'Bienvenido a productos Flight Radar'}
      />
      <ItemDetailContainer id={3} />
    </div>
  );
}


export default App;