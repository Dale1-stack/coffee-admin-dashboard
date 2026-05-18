import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  function handleShopRedirect() {
    navigate("/shop");
  }

  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Premium Coffee Experience</h1>

        <p>
          Discover premium beans from around
          the African continent.
        </p>

        <button onClick={handleShopRedirect}>
          Explore Shop
        </button>
      </div>
    </section>
  );
}

export default Hero;