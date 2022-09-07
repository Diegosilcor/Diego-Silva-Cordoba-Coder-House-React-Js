import { useState, useEffect } from "react";
import { getProductsById } from "../../mock/data";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState();

  const { productsId } = useParams();

  useEffect(() => {
    getProductsById(productsId)
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productsId]);

  return (
    <div>
      <h2>{products?.name}</h2>
      <ItemDetail {...products} />
    </div>
  );
};

export default ItemDetailContainer;
