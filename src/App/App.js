import './app.css'
import { currencies } from './currencies';
import { Form } from './Form';
import { Clock } from './Clock';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState(null);

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ shortName }) => shortName === currency).rate;

    setResult({
      sourceAmount: + amount,
      targetResult: amount / rate,
      currency
    })
  }
  return (
    <div className='app'>
      <Clock />
      <Form
        calculateResult={calculateResult}
        result={result}
      />
    </div>
  );
};

export default App;
