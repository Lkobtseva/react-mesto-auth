import React from "react";
import logo from "../images/logo.svg";
import { Link, NavLink, Outlet } from "react-router-dom";

function Header({ onSignOut, headerEmail }) {
  return (
    <div className='Header'>
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип" />
        <nav className="header__nav">
          <NavLink to="/sign-up" className="header__link">
            Регистрация
          </NavLink>
          <NavLink to="/sign-in" className="header__link">
            Войти
          </NavLink>
          <Outlet />
        </nav>
        {headerEmail && (
          <div className="header__block">
            <p className="header__email">{headerEmail}</p>
            <button className="header__exit" onClick={onSignOut}>
              Выйти
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
