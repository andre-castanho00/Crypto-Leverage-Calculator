import Hero from "../../components/hero/hero";
import Footer from "../../components/footer/footer";
import "./about.css";
import ReactGA from "react-ga4";
import { useEffect } from "react";

function About() {
  const renderAbout = () => {
    useEffect(() => {
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }, []);

    return (
      <div className="about-section">
        <h2>What is Trading Leverage Calculator?</h2>
        <p>
          Trading Leverage Calculator is a tool that allows you to calculate the
          leverage you need to enter a trade. The tool takes into account the
          stop loss percentage, the capital to enter the trade, and the amount
          you want to risk. The tool then calculates the leverage you need to
          enter the trade.
        </p>
        <h3>How it Works</h3>
        <ol className="about-list">
          <li>
            <strong>Enter your stop-loss percentage –</strong> the % distance
            from your entry to your stop.
          </li>
          <li>
            <strong>Enter your capital –</strong> the amount you’re planning to
            use for this trade.
          </li>
          <li>
            <strong>Enter the amount you’re willing to risk –</strong> or leave
            it blank to auto-calculate it based on a default risk percentage
            (e.g., 10%).
          </li>
          <li>
            Click the button to calculate your leverage. It will validate your
            input, calculate the required leverage to match your risk, and
            display the result clearly.
          </li>
        </ol>

        <h3>Disclaimer</h3>
        <p>
          The Trading Leverage Calculator provided on this website is intended
          for educational and informational purposes only. It does not
          constitute financial, investment, or trading advice. Past performance
          is not indicative of future results. Always consult with a qualified
          financial advisor before making any trading decisions. Use of this
          tool is at your own risk.
        </p>
      </div>
    );
  };

  return (
    <div className="page">
      <Hero type="about" />
      {renderAbout()}
      <Footer />
    </div>
  );
}

export default About;
