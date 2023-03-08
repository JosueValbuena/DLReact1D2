import React, { useState } from "react";

const Login = ({message="eeeeee"}) => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const validarDatos = (e) => {
        e.preventDefault();

        if(!email.includes("@") || !email.includes(".com")){
            /*Correcto*/
            alert("mail malo")
            return
        }else{
            /*Incorrecto*/
            alert("mail bueno")
        }
    }

    return (
        <div>
            <h1>Inicia Sesion</h1>
            <form action="" onSubmit={validarDatos}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit" disabled={!email||!password}>Iniciar Sesion</button>
            </form>
            <h1>{message}</h1>
        </div>
    )
}

export default Login;