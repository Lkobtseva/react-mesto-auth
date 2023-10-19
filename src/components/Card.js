import React from "react";
import App from "./App.js";

function Card(props) {
    function handleClick() {
        props.onCardClick(props);
    }

    return (
        <li className="card">
            <img
                className="card__image"
                src={props.link}
                alt={props.name}
                onClick={handleClick}
            />
            <button
                type="reset"
                className="card__deletebutton"
            />
            <div className="card__text">
                <h2 className="card__title">{props.name}</h2>
                <div className="card__like-container">
                    <button
                        type="button"
                        className="card__button"
                    ></button>
                    <span className="card__like-number">{props.likes.length}</span>
                </div>
            </div>
        </li>

    );
}
export default Card;
