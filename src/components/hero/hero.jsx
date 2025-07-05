import "./hero.css";
import { Link } from "react-router-dom";

/**
 * @function Hero
 * @description A component that renders the hero section of the website.
 * The section includes a heading, a paragraph, and a call-to-action button.
 * @returns {React.ReactElement} A JSX element representing the hero section.
 */
function Hero({ type = "home" }) {
  return (
    <section className="hero">
      <div className="container">
        <h1>Trading Leverage Calculator</h1>
        {/* <p>
          Full Stack Developer | Sotfware Engineer | Building Digital Solutions
        </p> */}
        {type === "home" ? (
          <Link to="/about" className="cta-button">
            About and How to Use
          </Link>
        ) : (
          <Link to="/" className="cta-button">
            Use Calculator
          </Link>
        )}
      </div>
    </section>
  );
}

export default Hero;
