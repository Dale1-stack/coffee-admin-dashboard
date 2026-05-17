import useProducts from "../hooks/useProducts";

import SearchBar from "../components/SearchBar";
import ProductGrid from "../components/ProductGrid";

function Shop() {
  const { products, search } =
    useProducts();

  const filteredProducts =
    products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="shop-page">
      <SearchBar />

      <ProductGrid
        products={filteredProducts}
      />
    </div>
  );
}

export default Shop;