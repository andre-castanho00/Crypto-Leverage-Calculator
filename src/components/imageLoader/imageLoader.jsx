import "./imageLoader.css";

function ImageLoader() {
  return (
    <div className="fade-images">
      <div className="fade-item">
        <img src="/logos/btc_logo.png" alt="Bitcoin" />
        <p style={{ color: "var(--btc-color)" }}>Bitcoin</p>
      </div>
      <div className="fade-item">
        <img src="/logos/eth_logo.svg" alt="Ethereum" />
        <p style={{ color: "var(--eth-color)" }}>Ethereum</p>
      </div>
      <div className="fade-item">
        <img src="/logos/xrp_logo.png" alt="XRP" />
        <p>XRP</p>
      </div>
      <div className="fade-item">
        <img src="/logos/sol_logo.png" alt="Solana" />
        <p
          style={{
            background:
              "linear-gradient(135deg, var(--solana-color-start), var(--solana-color-end))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Solana
        </p>
      </div>
    </div>
  );
}

export default ImageLoader;
