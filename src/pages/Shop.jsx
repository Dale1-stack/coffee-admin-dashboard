import useProducts from "../hooks/useProducts";

import SearchBar from "../components/SearchBar";
import ProductGrid from "../components/ProductGrid";
import Sidebar from "../components/Sidebar";

function Shop() {
  const {
    products,
    search,
    selectedOrigin
  } = useProducts();

  const filteredProducts =
    products.filter((product) => {
      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesOrigin =
        selectedOrigin === "All"
          ? true
          : product.origin ===
            selectedOrigin;

      return (
        matchesSearch && matchesOrigin
      );
    });

  return (
    <div className="shop-layout">
      <Sidebar />

      <div className="shop-content">
        <SearchBar />

        <ProductGrid
          products={filteredProducts}
        />
      </div>
    </div>
  );
}

export default Shop;