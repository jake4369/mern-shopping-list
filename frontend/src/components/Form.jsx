import { useEffect, useState } from "react";
import axios from "axios";

const Form = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [posting, setPosting] = useState(false);

  const handleAddProduct = (e) => {
    setPosting(true);
    e.preventDefault();
    const newProduct = {
      product: productName,
      quantity: quantity,
    };

    if (!productName) {
      console.log("No name");
      return;
    }

    axios
      .post("https://shopping-list-api-ftin.onrender.com/api/list", newProduct)
      .then((response) => {
        setProductName("");
        setQuantity(1);
        setPosting(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="form">
      <input
        type="text"
        placeholder="E.g. milk..."
        className="form__input"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <select
        name=""
        id=""
        className="form__select"
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      >
        {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => {
          return (
            <option key={num} value={num}>
              {num}
            </option>
          );
        })}
      </select>

      <button
        className="btn__add-item"
        onClick={handleAddProduct}
        disabled={posting}
      >
        {posting ? "Adding..." : "Add item"}
      </button>
    </form>
  );
};

export default Form;
