import React from "react";
import "./style.css";

const Form = (props) => (
    <form className="form">
        <fieldset className="form__fieldset">
            <div>
                <label>
                    <span className="form__labelText"> Kwota*: </span>
                    <input className="form__label" type="number" name="amountToExchange"
                        required step="0.01" placeholder="Wpisz kwotę" min="0.1" />
                </label>
            </div>
            <div>
                <span className="form__labelText">Mam:</span>
                <select className="form__label form__select">
                    <option value="PLN" selected>PLN - Polska</option>
                    <option value="EUR">EUR - Unia Europejska</option>
                    <option value="USD">USD - USA</option>
                    <option value="GBP">GBP - W. Brytania</option>
                    <option value="CHF">CHF - Szwajcaria</option>
                </select>
            </div>
            <div>
                <span className="form__labelText">Chcę:</span>
                <select className="form__label form__select">
                    <option value="PLN">PLN - Polska</option>
                    <option value="EUR">EUR - Unia Europejska</option>
                    <option value="USD" selected>USD - USA</option>
                    <option value="GBP">GBP - W. Brytania</option>
                    <option value="CHF">CHF - Szwajcaria</option>
                </select>
            </div>
            <div>
                <button className="form__button">Przelicz</button>
            </div>
        </fieldset>
    </form>
);

export default Form;
