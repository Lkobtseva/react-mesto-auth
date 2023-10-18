import React, { useEffect, useRef } from "react";

function useOutsideClick(ref, onClose) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, onClose]);
}

function useEscapeKey(onClose) {
    useEffect(() => {
        function handleEscape(event) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [onClose]);
}

export default function ImagePopup(props) {
    const popupRef = useRef();

    useOutsideClick(popupRef, props.onClose);
    useEscapeKey(props.onClose);

    return (
        <div
            className={`popup popup_type_open-card ${props.card ? "popup_opened" : ""}`}
        >
            <div className="popup__image-container" ref={popupRef}>
                <img
                    src={props.card ? props.card.link : ""}
                    alt={props.card ? props.card.name : ""}
                    className="popup__image"
                />
                <button type="button" className="popup__close-icon" onClick={props.onClose}></button>
                <h2 className="popup__image-title">
                    {props.card ? props.card.name : ""}
                </h2>
            </div>
        </div>
    );
}
