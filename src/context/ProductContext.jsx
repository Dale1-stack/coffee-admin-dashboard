import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedOrigin, setSelectedOrigin] = useState("All");

  useEffect(() => {
    fetch("https://my-api-v4py.onrender.com/coffee")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function addProduct(product) {
    setProducts([...products, product]);
  }

  function updateProduct(updatedProduct) {
    const updated = products.map((product) =>
      product.id === updatedProduct.id
        ? updatedProduct
        : product
    );

    setProducts(updated);
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        search,
        setSearch,
        addProduct,
        updateProduct,
        selectedOrigin,
        setSelectedOrigin
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;