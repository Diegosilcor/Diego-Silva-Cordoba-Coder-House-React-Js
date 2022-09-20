import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { database } from "../../firebaseConfig";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState()

    const { productsId } = useParams()

      useEffect(() => { 

        getDoc(doc(database, 'productos', productsId)).then(response => {
          const data = response.data()
          const productsAdapted = { id: response.id, ...data }
          setProducts(productsAdapted)
        })
      }, [productsId]);

  return (
    <div>
      <h2>{products?.name}</h2>
      <ItemDetail {...products} />
    </div>
  );
};

export default ItemDetailContainer;
