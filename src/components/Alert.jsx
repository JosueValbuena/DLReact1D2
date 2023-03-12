import React from "react";

export const Alert = ({alerta}) =>{
    return(
        <div>
            {/* componente que muestra alerta dependiendo de los valores ingresados en formulario del componente login */}
            {<p 
            className={alerta === 'Sesion Iniciada Correctamente' ?
            "bg-success w-40 text-white text-center my-3" : 
            "bg-danger w-40 text-white text-center my-3"}>{alerta}</p>}
        </div>
    )
}

export default Alert