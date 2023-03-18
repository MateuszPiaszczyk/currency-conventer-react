import { currencies } from "./currencies";
import { Form } from "./Form";
import { Clock } from "./Clock";
import { useState } from "react";
import { Wrapper } from "./styled";

function App() {
  const [result, setResult] = useState(null);

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(
      ({ shortName }) => shortName === currency
    ).rate;

    setResult({
      sourceAmount: +amount,
      targetResult: amount / rate,
      currency,
    });
  };
  return (
    <Wrapper>
      <Clock />
      <Form calculateResult={calculateResult} result={result} />
    </Wrapper>
  );
};

export default App;
