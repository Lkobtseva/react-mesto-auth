import React from "react";
import App from "./App.js";

function Card(card) {
    function handleClick() {
        card.onCardClick(card);
    }

    return (
        <li className="card">
            <img
                className="card__image"
                src={card.link}
                alt={card.name}
                onClick={handleClick}
            />
            <button
                type="reset"
                className="card__deletebutton"
            />
            <div className="card__text">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like-container">
                    <button
                        type="button"
                        className="card__button"
                    ></button>
                    <span className="card__like-number">{card.likes.length}</span>
                </div>
            </div>
        </li>

    );
}
export default Card;
