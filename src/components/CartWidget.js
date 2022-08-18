import React from "react";
import "../Styles/CartWidget.css"

const CartWidget = () => {
  //la lógica va siempre antes del return
  return (
      <div className="cart-widget">
        <span className="material-icons">shopping_cart</span> 
    </div>
  );
};

export default CartWidget;
