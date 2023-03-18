import { currencies } from "../currencies";
import { useState } from "react";
import { Result } from "./Result";
import {
  LabelText,
  Field,
  Info,
  Button,
  Legend,
  Header,
  Fieldset
} from "./styled";

export const Form = ({ calculateResult, result }) => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].shortName);

  const onSelectChange = ({ target }) => setCurrency(target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    calculateResult(currency, amount);
  };
  return (

    <form onSubmit={onSubmit}>
      <Fieldset>
        <Header>Currency Conventer React app</Header>
        <Legend>Przelicznik walut</Legend>
        <p>
          <label>
            <LabelText>
              Kwota w zł <span important="true">*</span>:
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
          <LabelText>Waluta</LabelText>
          <Field 
          as="select"
          value={currency} 
          onChange={onSelectChange} 
          >
            {currencies.map((currency) => (
              <option key={currency.shortName} value={currency.shortName}>
                {currency.flagIcon} - {currency.shortName} - {currency.fullName}
              </option>
            ))}
            </Field>
         
        </label>
              <p>
        <Button>Przelicz Walutę</Button>
</p>
        <Info>
          Kursy Walut na podstawie danych z Tabeli nr 008/A/NBP/2023 z dnia
          2023-01-12
        </Info>
        <Result result={result} />
      </Fieldset>
    </form>
  );
};