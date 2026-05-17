import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function useProducts() {
  return useContext(ProductContext);
}

export default useProducts;