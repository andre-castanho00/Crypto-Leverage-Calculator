import "./footer.css";

/**
 * Footer component to display the copyright information.
 *
 * @returns {React.ReactElement} The JSX element for the footer.
 */
function Footer() {
  return (
    <footer>
      <div className="container">
        <small>
          <strong>Disclaimer*</strong> This tool is for informational purposes
          only and does not constitute financial advice. Trading involves
          significant risk of loss. Always consult a licensed financial advisor.
        </small>

        <p style={{ marginTop: "1rem" }}>© 2025 André Castanho. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
