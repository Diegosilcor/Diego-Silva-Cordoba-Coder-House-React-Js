const products = [
  {
    id: "1",
    name: "Remera drone pilot",
    price: 100,
    image: "https://acortar.link/lRyo1K",
    description:
      "Tiene un gran diseño de calidad que refleja la originalidad del estampado",
    stock: 10,
    size: "XL",
    category: "remeras",
  },
  {
    id: "2",
    name: "Remera avion monomotor",
    price: 120,
    image: "https://acortar.link/bxTywP",
    description: "Diseño de avion monomotor de la segunda guerra mundial",
    stock: 5,
    size: "S",
    category: "remeras",
  },
  {
    id: "3",
    name: "Remera de avion y pista",
    price: 200,
    image: "https://acortar.link/yyZn6J",
    description:
      "Diseño del avion despegando sobre una pista, reflejando el airborne",
    stock: 18,
    size: "L",
    category: "remeras",
  },
  {
    id: "4",
    name: "Remera de avion con luna",
    price: 250,
    image: "https://acortar.link/To8IiK",
    description: "Diseño del avion y la luna surcando los aires",
    stock: 11,
    size: "M",
    category: "remeras",
  },
  {
    id: "5",
    name: "Reloj G Shock",
    price: 250,
    image: "https://acortar.link/siz74B",
    description: "Diseño resistente para aventuras",
    stock: 11,
    category: "relojes",
  },
  {
    id: "6",
    name: "Reloj G Shock",
    price: 350,
    image: "https://acortar.link/iHEa3Q",
    description: "Ideal para realizar deportes",
    stock: 15,
    category: "relojes",
  },
  {
    id: "7",
    name: "Reloj G Shock azul",
    price: 450,
    image: "https://acortar.link/pGOtgy",
    description: "Diseño mas formal y deportivo",
    stock: 5,
    category: "relojes",
  },
  {
    id: "8",
    name: "Reloj G Shock",
    price: 150,
    image: "https://acortar.link/IJ7XI2",
    description: "Diseño de vintage",
    stock: 8,
    category: "relojes",
  },
  {
    id: "9",
    name: "Campera roja",
    price: 350,
    image: "https://acortar.link/yaAfYz",
    description: "Campera ideal y liviana para otoño-invierno",
    stock: 5,
    category: "camperas",
  },
  {
    id: "10",
    name: "Campera azul",
    price: 450,
    image: "https://acortar.link/II58dS",
    description: "Diseño atractivo y deportivo",
    stock: 10,
    category: "camperas",
  },
  {
    id: "11",
    name: "Campera azul con rojo",
    price: 550,
    image: "https://acortar.link/Zm2Yql",
    description: "Diseño informal ideal para realizar actividades fisicas",
    stock: 9,
    category: "camperas",
  },
  {
    id: "12",
    name: "Campera con estampados",
    price: 650,
    image: "https://acortar.link/c1uUsn",
    description: "Diseño perfecto para adolescentes",
    stock: 12,
    category: "camperas",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, []);
  });
};
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        products.filter((indumentaria) => indumentaria.category === categoryId)
      );
    }, []);
  });
};

export const getProductsById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((indumentaria) => indumentaria.id === id));
    }, []);
  });
};
