import React, { useState } from "react";

const Login = ({setAlerta}) => {
    //seteando los valores de los inputs 
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    //eliminando el evento predeterminado y condicionando el texto de la alerta dependiendo del value ingresado por el usuario
    const validarDatos = (e) => {
        e.preventDefault();

        if(!email.includes("@")||!email.includes(".com")){
            setAlerta("El correo debe incluir '@' y '.com'")
            return
        }else if(!email.includes('correo@hotmail.com') || !password.includes('asdf')){
            setAlerta("Credenciales incorrectas. Prueba con correo@hotmail.com y asdf")
            return
        }
        setAlerta("Sesion Iniciada Correctamente")
    }

    return (
        // formulario
        <div className="mt-3">
            <h1 className="text-center">Inicia Sesion</h1>
            <form onSubmit={validarDatos}>
                <div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" value={email} id="email" onChange={(e)=>setEmail(e.target.value)} className="form-control"/>
                </div>
                <div>
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" value={password} id="password" onChange={(e)=>setPassword(e.target.value)} className="form-control"/>
                </div>
                <button type="submit" disabled={!email||!password} className="btn btn-primary mt-3">Iniciar Sesion</button>
            </form>
        </div>
    )
}

export default Login;