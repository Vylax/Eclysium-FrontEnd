import React from "react"

import "./login.sass"

const Login = () => {
    return (
        <main className="main-login">
            <div className="form-container">

                <h2 className="form-header">Iniciar sesión</h2>
                <br/><br/><br/>
                <input type="text" name="name" autoComplete="off" required />
                <label htmlFor="name" className="label-name">
                    <span className="content-name">Correo electrónico</span>
                </label>

                <input type="text" name="name" autoComplete="off" required />
                <label htmlFor="name" className="label-name">
                    <span className="content-name">Contraseña</span>
                </label>

                <div className="form-footer">
                    <button className="form-primary-button">Acceder</button>
                </div>

            </div>
        </main>
    );
}

export default Login