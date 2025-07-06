import "./imageLoader.css";

function ImageLoader() {
  return (
    <div className="fade-images">
      <img className="fade-img" src="/logos/btc_logo.png" alt="1" />
      <img className="fade-img" src="/logos/eth_logo.svg" alt="2" />
      <img className="fade-img" src="/logos/xrp_logo.png" alt="3" />
      <img className="fade-img" src="/logos/sol_logo.png" alt="4" />
    </div>
  );
}

export default ImageLoader;
