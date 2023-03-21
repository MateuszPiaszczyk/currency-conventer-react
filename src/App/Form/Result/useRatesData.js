import axios from "axios";
import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        const getRates = async () => {
            try {
                const currenciesGetApi = "https://api.exchangerate.host/latest?base=PLN";
                const response = await axios.get(currenciesGetApi);

                setRatesData({
                    date: response.data.date,
                    rates: response.data.rates,
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