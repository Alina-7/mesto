import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Login({ isLoggedIn, onLogin }) {
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
        onLogin(email, password);
    }

    if (isLoggedIn) {
        return <Navigate to="/*" />;
    }

    return (
        <section className='login'>
            <h2 className="login__title">Вход</h2>
            <form onSubmit={handleSubmit} className="login__form" noValidate>
                <input className='popup__input login__input'
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    autoComplete="off"
                />

                <input className='login__input popup__input'
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={handlePasswordChange}
                    autoComplete="off"
                />
            </form>
            <button
                className="popup__button-save login__button"
                type="submit">
                Войти
                </button>

        </section>

    );
}

export default Login;