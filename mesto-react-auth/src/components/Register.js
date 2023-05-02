import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
//import './styles/Register.css';


function Register({ isLoggedIn, onRegister }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handlePasswordChange(evt) {
        setPassword(evt.target.value);
    }

    function handleEmailChange(evt) {
        setEmail(evt.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onRegister(email, password);
    }

    if (isLoggedIn) {
        return <Navigate to="/" />;
    }
    return (
        <section className='login register'>
            <h2 className='login__title'>Регистрация</h2>
            <form className='login__form' onSubmit={handleSubmit} noValidate>
                <input className='login__input popup__input'
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={handlePasswordChange}
                    autoComplete="off"
                />
                <input className='login__input popup__input'
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    autoComplete="off"
                />

                <button className='popup__button-save login__button'>Зарегистрироваться</button>
                <Link to="/sign-in" className="login__link"> Уже зарегистрированы? Войти </Link>
            </form>
        </section>
    )
}

export default Register;