import PropTypes from "prop-types";

function CurrencyInput(props) {
  return (
    <div className="group" style={{ fontFamily: "monospace" }}>
      <input
        type="text"
        value={props.amount.toString()}
        onChange={(ev) => props.onAmountChange(ev.target.value)}
      />
      <select
        value={props.currency.toString()}
        onChange={(ev) => {
          props.onCurrencyChange(ev.target.value);
        }}
      >
        {props.currencies.map((currency, index) => (
          <option key={index} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default CurrencyInput;
