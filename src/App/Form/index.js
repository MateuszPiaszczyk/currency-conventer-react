import "./style.css"
import { Container } from "../Container"
import { currencies } from "../currencies"
import { useState } from "react"
import { Result } from "./Result"

export const Form = ({ calculateResult, result }) => {
    const [amount, setAmount] = useState(" ");
    const [currency, setCurrency] = useState(currencies[0].shortName);

    const onSelectChange = ({ target }) => setCurrency(target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        calculateResult(amount, currency);
    }
    return (

        <Container>

            <form className="form" onSubmit={onSubmit} >

            <fieldset class="form__fieldset">
                <h1 className="heading">
                    Currency Conventer React app
                </h1>
                <legend className="form__legend">
                    Przelicznik walut
                </legend>
                <p>
                    <label>
                        <span className="form__labelText">
                            Kwota w zł
                            <span
                                className="form__field form__field--important">
                                *
                            </span>:
                        </span>
                        <input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            placeholder="Wpisz kwotę w zł"
                            className="form__field"
                            min="0.01"
                            type="number"
                            required
                            autoFocus
                            step="0.01" />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">
                            Waluta
                        </span>
                        <select
                            className="form__field"
                            value={currency}
                            onChange={onSelectChange}
                        >
                            {currencies.map((currency => (
                                <option
                                    key={currency.shortName}
                                    value={currency.shortName}
                                >
                                    {currency.flagIcon} - {currency.shortName} - {currency.fullName}
                                </option>
                            )))};
                        </select>
                    </label>
                </p>

                <button className="form__button">
                    Przelicz Walutę
                </button>

                <p className="form__info"> Kursy Walut na podstawie danych z Tabeli nr 008/A/NBP/2023 z dnia 2023-01-12 </p>
                <Result result={result}/>
            </fieldset>
            </form>
        </Container>
    );
};

