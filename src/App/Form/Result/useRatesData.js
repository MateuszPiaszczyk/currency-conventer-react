import axios from "axios";
import { useEffect, useState } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
  });

  useEffect(() => {
    const getRates = async () => {
      try {
        const CURRENCIES_API_URL =
          "https://api.exchangerate.host/latest?base=PLN";
        const {
          data: { date, rates },
        } = await axios.get(CURRENCIES_API_URL);

        setRatesData({
          date,
          rates,
          status: "success",
        });
      } catch (error) {
        console.error("Something went wrong/Coś poszło nie tak", error);
        setRatesData({
          status: "error",
        });
      }
    };
    setTimeout(getRates, 3000);
  }, []);

  return ratesData;
};
