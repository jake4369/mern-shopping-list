import { useEffect, useState } from "react";
import axios from "axios";

const List = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://shopping-list-api-ftin.onrender.com/api/list")
      .then((res) => {
        setProducts(res.data.data.products);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <ul>
          {products.length === 0 ? (
            <li>No products</li>
          ) : (
            products.map((item) => <li key={item._id}>{item.product}</li>)
          )}
        </ul>
      )}
    </>
  );
};

export default List;
