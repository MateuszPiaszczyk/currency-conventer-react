import { useEffect, useState } from "react";

const useConvert = (inputCurrency, outputCurrency, rates) => {
  const [amount, setAmount] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    setResult();
  }, [inputCurrency, outputCurrency]);

  const onAmountChange = ({ target }) => setAmount(target.value);

  const calculateResult = () => {
    setResult((amount / rates[inputCurrency]) * rates[outputCurrency]);
  };
  return { amount, result, calculateResult, onAmountChange };
};

export { useConvert };
