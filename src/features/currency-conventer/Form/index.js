import { useState } from "react";
import { Result } from "./Result";
import {
  LabelText,
  Field,
  Info,
  Button,
  Legend,
  Fieldset,
  Loading,
  Failure,
  RequiredSign,
  Preloader,
} from "./styled";
import { useRatesData } from "./Result/useRatesData";

export const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState(null);
  const ratesData = useRatesData("");

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetResult: amount * rate,
      currency,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    calculateResult(currency, amount);
  };

  const onInputChange = ({ target }) => setAmount(target.value);
  const onSelectChange = ({ target }) => setCurrency(target.value);

  return (
    <form onSubmit={onSubmit}>
      <Fieldset>
        <Legend>Przelicznik walut</Legend>
        {ratesData.status === "loading" ? (
          <>
            <Loading>
              ENG: Loading data from the European Central Bank. Please be
              patient.
              <br />
              PL: Ładuje dane z Europjskiego Banku Centralnego. Proszę o
              cierpliwość
            </Loading>
            <Preloader></Preloader>
          </>
        ) : ratesData.status === "error" ? (
          <Failure>
            ENG: Something went wrong.. Please check your internet connection If
            your connection is stable, please try again later.
            <br />
            PL: Coś poszło nie tak Proszę sprawdzić połączenie z internetem,
            jeśli jest wporządku. Spróbój ponownie pozniej.
          </Failure>
        ) : (
          <>
            <p>
              <label>
                <LabelText>
                  Kwota w zł <RequiredSign>*</RequiredSign>:
                </LabelText>

                <Field
                  value={amount}
                  onChange={onInputChange}
                  placeholder="Wpisz kwotę w zł"
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
              <Field as="select" value={currency} onChange={onSelectChange}>
                {Object.keys(ratesData.rates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </Field>
            </label>
            <p>
              <Button>Przelicz Walutę</Button>
            </p>
            <Info>
              Kursy walut pobierane są z Europejskiego Banku Centralnego.
              <br /> Aktualne na dzień:
              <br />
              {ratesData.date}
            </Info>
            <Result result={result} />
          </>
        )}
      </Fieldset>
    </form>
  );
};
