import { useEffect, useState } from "react";
import { getItem } from "../../asyncMocks";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;
  useEffect(() => {
    getItem(Number(id)).then((res) => {
      setItem(res);
    });
  }, [id]);

  return <>{item && <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
