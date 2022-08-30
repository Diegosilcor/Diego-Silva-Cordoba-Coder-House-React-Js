import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Swal from 'sweetalert2';
import './ItemDetail.css';

//ItemDetail recibe los datos del producto encontrado por id previamente y los muestra

const ItemDetail = ({ item }) => {
  const onAdd = (qty) => {
  Swal.fire({
  icon: 'success',    
  title: 'Radar Flight',
  text: `Has agregado ${qty} remera de aviones`,
  confirmButtonText: 'Genial',

})
  };

  console.log(item);
  return (
    <article className="product-detail">
      <img src={item.image} alt="" className="product-detail__img" />
      <div className="product-detail__info">
        <h2 className="name">{item.name}</h2>
        <p className="description">{item.description}</p>
        <ul className="info-grid">
          <li>Price:</li>
          <li>${item.price}</li>
          <li>Size:</li>
          <li>{item.size}</li>
          <li>Vendor:</li>
          <li>{item.vendor}</li>
          <li>Type:</li>
          <li>{item.type}</li>
        </ul>
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd}
        />
      </div>
    </article>
  );
};

export default ItemDetail;
