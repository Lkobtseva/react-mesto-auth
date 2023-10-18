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

export default function PopupWithForm(props) {
    const popupRef = useRef();

    useOutsideClick(popupRef, props.onClose);
    useEscapeKey(props.onClose);

    return (
        <div
            className={`popup popup_${props.name} ${props.isOpen ? "popup_opened" : ""
                }`}
        >
            <div className="popup__container" ref={popupRef}>
                <button
                    className="popup__close-icon"
                    type="button"
                    onClick={props.onClose}
                ></button>
                <h2 className="popup__title">{props.title}</h2>
                <form className={`popup__form popup__${props.form}`}>
                    {props.children}
                    <button className="popup__button" type="submit">
                        {props.buttonText}
                    </button>
                </form>
            </div>
        </div>
    );
}
