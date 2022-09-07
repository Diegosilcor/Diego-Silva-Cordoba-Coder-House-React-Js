import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../mock/data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts;

    asyncFunction(categoryId)
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <>
      <h2>{saludo}</h2>
      <div>
        <ItemList products={products} />
      </div>
    </>
  );
};

export default ItemListContainer;
