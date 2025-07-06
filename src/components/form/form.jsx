import { useState } from "react";
import ImageLoader from "../imageLoader/imageLoader";
import "./form.css";

function FormSection() {
  const [risk, setRisk] = useState(0.1); // 10% by default
  const [form, setForm] = useState({
    stopLoss: "",
    capital: "",
    amountToRisk: "",
  });
  const [leverage, setLeverage] = useState(null);
  const DECIMALS_TO_ROUND = 2;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form.capital);
    console.log(form.amountToRisk);

    if (form.capital < form.amountToRisk) {
      console.log("You cannot risk more than your capital");
      return;
    }

    if (form.amountToRisk === "") {
      setForm({
        ...form,
        amountToRisk: calculateRisk(),
      });
    }

    let aux = (form.amountToRisk * 100) / form.stopLoss;
    let newLeverage = (aux / form.capital).toFixed(DECIMALS_TO_ROUND);

    setLeverage(newLeverage);

    console.log(
      `For a wallet value of ${form.capital}€ and a stop loss of ${form.stopLoss}%, risking a total of ${form.amountToRisk}€.`
    );
    console.log(`Your leverage should be aroung ${newLeverage}x`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value === "" ? "" : parseFloat(value),
    });
  };

  const calculateRisk = () => {
    return (form.capital * risk).toFixed(DECIMALS_TO_ROUND);
  };

  const renderForm = () => {
    return (
      <form className="calc-form" onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="stop-loss">
            Stop loss percentage <span style={{ color: "#f7931a" }}>*</span>
          </label>
          <input
            id="stop-loss"
            name="stopLoss"
            type="number"
            min={0.01}
            step={0.01}
            placeholder="Input percentage value (e.g 1.5%)"
            required
            value={form.stopLoss}
            onChange={handleChange}
          />
        </div>

        <div className="form-item">
          <label htmlFor="capital">
            Capital to enter the trade{" "}
            <span style={{ color: "#f7931a" }}>*</span>
          </label>
          <input
            id="capital"
            name="capital"
            type="number"
            min={10}
            placeholder="Input amount to trade (e.g 1000€)"
            required
            value={form.capital}
            onChange={handleChange}
          />
        </div>

        <div className="form-item">
          <label htmlFor="risk">Amount of capital to risk in this trade</label>
          <input
            id="risk"
            name="amountToRisk"
            type="number"
            min={0.1}
            step={0.1}
            placeholder="Input amount to risk (e.g 100€)"
            value={form.amountToRisk}
            onChange={handleChange}
          />
          <legend style={{ fontStyle: "italic", color: "#6d6d6d" }}>
            The capital to risk should be greater than the capital to enter the
            trade
          </legend>
        </div>

        {leverage && (
          <>
            <p>
              For a wallet value of ${form.capital}€ and a stop loss of $
              {form.stopLoss}%, risking a total of ${form.amountToRisk}€.
            </p>
            <p>
              <strong>Your leverage should be around {leverage}x</strong>
            </p>
          </>
        )}

        <button className="submit-btn" type="submit">
          CALCULATE
        </button>
      </form>
    );
  };

  return (
    <section className="form-section">
      {/* <div className="main-container">
        {renderForm()}

        <ImageLoader />
      </div> */}
      <div className="form-container">{renderForm()}</div>
      <div className="images-container">
        <ImageLoader />
      </div>
    </section>
  );
}

export default FormSection;
