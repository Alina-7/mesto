import React from "react";
import logo from "../images/logo.svg";
import { Link, Route, Routes } from "react-router-dom";

function Header({ signUp, signIn }) {
  return (
    <header className="header">
      <img
        className="header__logo"
        alt="Место (логотип)"
        src={logo}
      />
      <Routes>
      <Route path="/sign-in"
       element ={
        <Link
          className="header__link"
          to="/sign-up">
          {signUp}
        </Link>
        }
        >
       
      </Route>

      <Route path="/sign-up"
       element ={
        <Link
          className="header__link"
          to="/sign-in">
          {signIn}
        </Link>
      }
      >
      </Route>

      {/* <Route exact path="/">
        <div className="header__container">
          <p className="header__email">
            {headerEmail}
          </p>
          <Link
            className="header__exit"
            onClick={onSignOut}
            to="sign-in">
            {signOut}
          </Link>
        </div>
      </Route> */}
      </Routes>
      
    </header>
  );
}

export default Header;