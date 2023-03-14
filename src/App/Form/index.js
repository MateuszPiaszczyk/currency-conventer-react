import { currencies } from "../currencies";
import { useState } from "react";
import { Result } from "./Result";
import { LabelText, Field, Info, Button } from "./styled";

export const Form = ({ calculateResult, result }) => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].shortName);

  const onSelectChange = ({ target }) => setCurrency(target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    calculateResult(currency, amount);
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form__fieldset">
        <h1 className="heading">Currency Conventer React app</h1>
        <legend className="form__legend">Przelicznik walut</legend>
        <p>
          <label>
            <LabelText>
              Kwota w zł
              <LabelText important>*</LabelText>:
            </LabelText>
            <Field
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              placeholder="Wpisz kwotę w zł"
              className="form__field"
              min="0.01"
              type="number"
              required
              autoFocus
              step="0.01"
            />
          </label>
        </p>
        
          <label>
            <LabelText>
            Waluta
            </LabelText>
            <Field
              value={currency}
              onChange={onSelectChange}
            >
              {currencies.map((currency) => (
                <option key={currency.shortName} value={currency.shortName}>
                  {currency.flagIcon} - {currency.shortName} -{" "}
                  {currency.fullName}
                </option>
              ))}
              ;
            </Field>
          </label>
        
        <Button>Przelicz Walutę</Button>

        <Info>
          Kursy Walut na podstawie danych z Tabeli nr 008/A/NBP/2023 z dnia
          2023-01-12
        </Info>
        <Result result={result} />
      </fieldset>
    </form>
  );
};
