import './app.css'
import { currencies } from './currencies';
import { Form } from './Form';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ shortName }) => shortName === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetResult: amount / rate,
      currency,
    });
  }
  return (
    <div className="app">
    <Form
      result={result}
      calculateResult={calculateResult}
      />
    </div>

  );
}

export default App;
