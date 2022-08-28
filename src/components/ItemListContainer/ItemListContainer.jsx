import React from "react";
import ItemList from "../ItemList/ItemList";
import "../ItemListContainer/ItemListContainer.css"


const ItemListContainer = ({ saludo }) => {
  return (
    <div className="container">
      <h3> {saludo} </h3>
      <ItemList />
    </div>
  );
}
export default ItemListContainer
