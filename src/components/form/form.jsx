import { useState } from "react";
import ImageLoader from "../imageLoader/imageLoader";
import "./form.css";

function FormSection() {
  const [risk, setRisk] = useState(0.1); // 10%
  const [form, setForm] = useState({
    stopLoss: "",
    capital: "",
    amountToRisk: "",
  });
  const [leverage, setLeverage] = useState(null);
  const DECIMALS_TO_ROUND = 2;

  const handleSubmit = (e) => {
    e.preventDefault();

    const capital = parseFloat(form.capital);
    const stopLoss = parseFloat(form.stopLoss);

    // fallback if amountToRisk is empty
    const amountToRisk =
      form.amountToRisk === ""
        ? parseFloat((capital * risk).toFixed(DECIMALS_TO_ROUND))
        : parseFloat(form.amountToRisk);

    if (capital < amountToRisk) {
      alert("You cannot risk more than your capital");
      return;
    }

    const amountNeeded = (amountToRisk * 100) / stopLoss;
    const newLeverage = (amountNeeded / capital).toFixed(DECIMALS_TO_ROUND);

    setForm((prev) => ({
      ...prev,
      amountToRisk: amountToRisk.toFixed(DECIMALS_TO_ROUND),
    }));

    setLeverage(newLeverage);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value === "" ? "" : parseFloat(value),
    });
  };

  const renderForm = () => (
    <form className="calc-form" onSubmit={handleSubmit}>
      <div className="form-item">
        <label htmlFor="stop-loss">
          Stop loss percentage <span style={{ color: "#f7931a" }}>*</span>
        </label>
        <input
          id="stop-loss"
          name="stopLoss"
          type="number"
          step={0.01}
          min={0.01}
          required
          value={form.stopLoss}
          onChange={handleChange}
          placeholder="Input percentage value (e.g 1.5%)"
        />
      </div>

      <div className="form-item">
        <label htmlFor="capital">
          Capital to enter the trade <span style={{ color: "#f7931a" }}>*</span>
        </label>
        <input
          id="capital"
          name="capital"
          type="number"
          min={10}
          required
          value={form.capital}
          onChange={handleChange}
          placeholder="Input amount to trade (e.g 1000€)"
        />
      </div>

      <div className="form-item">
        <label htmlFor="risk">Amount of capital to risk in this trade</label>
        <input
          id="risk"
          name="amountToRisk"
          type="number"
          step={0.1}
          min={0.1}
          value={form.amountToRisk}
          onChange={handleChange}
          placeholder="Input amount to risk (e.g 100€)"
        />
        <legend style={{ fontStyle: "italic", color: "#6d6d6d" }}>
          Leave this field empty to automatically risk 10% of your capital.
        </legend>
      </div>

      {leverage && (
        <>
          <p>
            For a wallet value of {form.capital}€ and a stop loss of{" "}
            {form.stopLoss}%, risking a total of {form.amountToRisk}€.
          </p>
          <p>
            <strong>Your leverage should be around {leverage}x</strong>
          </p>
        </>
      )}

      <button className="submit-btn" type="submit">
        Calculate
      </button>
    </form>
  );

  return (
    <section className="form-section">
      <div className="form-container">{renderForm()}</div>
      <div className="images-container">
        <ImageLoader />
      </div>
    </section>
  );
}

export default FormSection;
