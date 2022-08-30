import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Swal from 'sweetalert2';
import '../Item/Item.css';


const Item = ({ name, image, price, id, stock }) => {
  const onAdd = (qty) => {
  Swal.fire({
  icon: 'success',    
  title: 'Radar Flight',
  text: `Has agregado ${qty} remera de aviones`,
  confirmButtonText: 'Genial',

})
  };

  return (
    <article className="product-card">
      <img className="product-card__image" src={image} alt="" />

      <h3 className="product-card__name">{name}</h3>
      <span className="product-card__name">${price}</span>

      <ItemCount stock={stock} onAdd={onAdd} initial={1} />
    </article>
  );
};

export default Item;
