import { useState } from "react";
import { Result } from "./Result";
import {
  LabelText,
  Field,
  Info,
  Button,
  Legend,
  Header,
  Fieldset,
  Loading,
  Failure,
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
      targetResult: amount / rate,
      currency,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    calculateResult(currency, amount);
  };

  const onSelectChange = ({ target }) => setCurrency(target.value);

  return (

    <form onSubmit={onSubmit}>
      <Fieldset>
        <Header>Currency Conventer React app</Header>
        <Legend>Przelicznik walut</Legend>
        {ratesData.state === "loading"
         ? (
          <Loading>
            ENG: Loading data from the European Central Bank. Please be patient.
            <br />
            PL: Ładuje dane z Europjskiego Banku Centralnego. Proszę o
            cierpliwość
          </Loading>
        ) 
        : ( 
          ratesData.state === "error" 
          ? ( 
          <Failure>
            ENG: Something went wrong.. Please check your internet connection If
            your connection is stable, please try again later.
            <br />
            PL: Coś poszło nie tak Proszę sprawdzić połączenie z internetem,
            jeśli jest wporządku. Spróbój ponownie pozniej.
          </Failure>
        ) 
        : (
          <>
            <p>
              <label>           
                <LabelText>
                  Kwota w zł <span important="important">*</span>:
                </LabelText>
               
                <Field
                  value={amount}
                  onChange={({ target }) => setAmount(target.value)}
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
              <Field 
              as="select" 
              value={currency} 
              onChange={onSelectChange}
              >
                {!!ratesData.rates && Object.keys(ratesData.rates).map((currency) => (
                  <option 
                  key={currency} 
                  value={currency}
                  >
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
        ))}
      </Fieldset>
    </form>
  );
};
