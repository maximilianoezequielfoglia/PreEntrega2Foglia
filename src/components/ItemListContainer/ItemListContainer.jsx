import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMocks";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState();
  const category = useParams().category;
  useEffect(() => {
    getProducts().then((res) => {
      if (category) {
        setProducts(res.filter((product) => product.category === category));
        setTitle(category);
      } else {
        setProducts(res);
        setTitle("all");
      }
    });
  }, [category]);

  return (
    <>
      <ItemList products={products} title={title} />
    </>
  );
};

export default ItemListContainer;
