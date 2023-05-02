import React from "react";

function Login() {
    return (
        <section className='login'>
        <h2 className='login__title'>Вход</h2>
        <form className='login__form'>
            <input className='login__input' type='email' placeholder='Email' required value/>
                <input className='login__input' type='password' placeholder='Пароль' required value/>
        </form>

        </section>
    )
}

export default Login
