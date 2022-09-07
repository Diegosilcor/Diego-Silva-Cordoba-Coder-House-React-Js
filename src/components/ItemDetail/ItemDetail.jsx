import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import Swal from "sweetalert2";

const handleOnAdd = (quantity) => {
  Swal.fire({
    icon: "success",
    title: "Radar Flight",
    text: `Has agregado ${quantity} productos Radar Flight`,
    confirmButtonText: "Genial",
  });
};

const Item = ({ id, name, image, description, price }) => {
  return (
    <div className="section-container">
      <div className="card-container">
        <div className="card">
          <img className="card-img-top" src={image} alt={name} />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">{description}</p>
            <p className="precio">Precio: ${price}</p>
          </div>
        </div>
      </div>
      <ItemCount stock={10} onAdd={handleOnAdd} />
    </div>
  );
};

export default Item;
