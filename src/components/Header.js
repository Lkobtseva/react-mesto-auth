/*import React from "react";
import logo from "../images/logo.svg";
import { Link, Route, Routes } from "react-router-dom";

function Header({ onSignOut, headerEmail }) {
    return (
        <div className='Header'>
            <header className="header">
                <img className="header__logo" src={logo} alt="Логотип" />
                <Routes>
                <Route path="/sign-in">
                    <Link to="/sign-up" className="header__link">
                        Регистрация
                    </Link>
                </Route>

                <Route path="/sign-up">
                    <Link to="/sign-in" className="header__link">
                        Войти
                    </Link>
                </Route>

                <Route exact path="/">
                    <div className="header__block">
                        <p className="header__email">{headerEmail}</p>
                        <Link to="/sign-in" className="header__exit" onClick={onSignOut}>
                            Выйти
                        </Link>
                    </div>
                </Route>
                </Routes>
            </header>
        </div>
    );
}
export default Header;*/
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
