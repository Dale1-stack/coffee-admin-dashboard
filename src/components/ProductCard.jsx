function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-content">
        <h2>{product.name}</h2>

        <p>{product.description}</p>

        <span>{product.origin}</span>

        <h3>
          {new Intl.NumberFormat("en-KE", {
            style: "currency",
            currency: "KES"
          }).format(product.price)}
        </h3>
      </div>
    </div>
  );
}

export default ProductCard;