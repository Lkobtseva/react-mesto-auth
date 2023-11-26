import React from "react";
import logo from '../images/logo.svg';
import { Link, useLocation } from 'react-router-dom'

function Header({isloggedIn, headerEmail, onSignOut}) {
    const location = useLocation();
    return(
        <header className="header">
            <Link to="/" className="header__logo">
            <img className="header__logo" src={logo} alt="Логотип" />
            </Link>
            {isloggedIn ? (
                <>
                    <p className="header__email">{headerEmail}</p>
                    <button onClick={onSignOut}>Выйти</button>
                </>
            ) : (
                <>
                    {location.pathname.includes('sign-in') && <Link to="/sign-up" className="header__link">Регистрация</Link>}
                    {location.pathname.includes('sign-up') && <Link to="/sign-in" className="header__link">Войти</Link>}
                </>
            )}
            
        </header>
    )
}

export default Header;

