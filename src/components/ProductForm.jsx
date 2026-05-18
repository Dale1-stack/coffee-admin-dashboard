import {
  useId,
  useRef,
  useState
} from "react";

import useProducts from "../hooks/useProducts";

function ProductForm() {
  const nameId = useId();

  const inputRef = useRef();

  const { addProduct } = useProducts();

  const [formData, setFormData] =
    useState({
      name: "",
      description: "",
      origin: "",
      price: ""
    });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(" https://my-api-v4py.onrender.com/coffee", {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json"
      },
      body: JSON.stringify({
        ...formData,
        price: Number(formData.price)
      })
    })
      .then((res) => res.json())
      .then((newProduct) => {
        addProduct(newProduct);

        setFormData({
          name: "",
          description: "",
          origin: "",
          price: ""
        });

        inputRef.current.focus();
      });
  }

  return (
    <form
      className="product-form"
      onSubmit={handleSubmit}
    >
      <h2>Add New Coffee</h2>

      <label htmlFor={nameId}>
        Coffee Name
      </label>

      <input
        ref={inputRef}
        id={nameId}
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <input
        type="text"
        name="origin"
        placeholder="Origin"
        value={formData.origin}
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
      />

      <button type="submit">
        Add Product
      </button>
    </form>
  );
}

export default ProductForm;