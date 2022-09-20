import { useState, useEffect } from "react";

import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { database } from '../../firebaseConfig';

const ItemListContainer = ( { saludo } ) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams();

    useEffect(() => {

        const collectionRef = !categoryId ? collection(database, 'productos') : query(collection(database, 'productos'), where('category', '==', categoryId))

        getDocs(collectionRef).then(response => {
            console.log(response)
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data};
            })
            setProducts(productsAdapted)
             }).catch(error => {
                console.log(error)
            });
          }, [categoryId])

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
