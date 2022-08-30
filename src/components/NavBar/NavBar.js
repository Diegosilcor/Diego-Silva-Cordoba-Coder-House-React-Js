import React, { useState } from "react";
import "../NavBar/NavBar.css";
import "../CardWidget/CartWidget.css"
import CartWidget from "../CardWidget/CartWidget";
import Button from "../Button/Button";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
    Radar Flight
      <a href="https://www.linkedin.com/in/diego-ignacio-silva-cordoba" className="nav__brand">
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="https://www.linkedin.com/in/diego-ignacio-silva-cordoba" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="https://www.linkedin.com/in/diego-ignacio-silva-cordoba" className="nav__link">
            Sobre nosotros
          </a>
        </li>
        <li className="nav__item">
          <a href="https://www.linkedin.com/in/diego-ignacio-silva-cordoba" className="nav__link">
            Vuelos
          </a>
        </li>
        <li className="nav__item">
          <a href="https://www.linkedin.com/in/diego-ignacio-silva-cordoba" className="nav__link">
            Contacto
          </a>
        </li>
      </ul>

      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <CartWidget />
      <Button value='Comprar'/>
    </nav>
    
  );
}




export default Navbar;