import {
  FaCoffee,
  FaGlobeAfrica,
  FaShippingFast
} from "react-icons/fa";

function WhyUs() {
  return (
    <section className="why-us">
      <div className="why-us-header">
        <h2>Why Choose Us</h2>

        <p>
          We bring top-tier coffee experiences
          directly to coffee lovers across
          Kenya and beyond.
        </p>
      </div>

      <div className="why-us-grid">
        <div className="why-card">
          <FaCoffee className="why-icon" />

          <h3>Top Quality Beans</h3>

          <p>
            Our coffee is carefully sourced
            from the best farms around the
            continent to guarantee rich flavor,
            freshness, and aroma in every
            cup.
          </p>
        </div>

        <div className="why-card">
          <FaGlobeAfrica className="why-icon" />

          <h3>Widely Sourced</h3>

          <p>
            We partner with trusted farmers
            from a wide range of countries to bring
            you authentic international coffee
            experiences.
          </p>
        </div>

        <div className="why-card">
          <FaShippingFast className="why-icon" />

          <h3>Fast Reliable Delivery</h3>

          <p>
            Enjoy fast and secure delivery
            services that ensure your coffee
            arrives fresh and ready to brew
            within Nairobi.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;