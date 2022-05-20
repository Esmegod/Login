import React from 'react'
export default function Registro({form, onChange, onSubmit, onBlur, validaciones, validarPass, onPaste, validarPassLength}) {
    return (
        <div>
            <h1>
            Registro
            </h1>
            <form onSubmit={onSubmit}>
            <label>Nombre: </label>
            <input onChange={onChange} type="text" value={form.nombre} name="nombre"  id="nombre"></input><br></br>
            <label>Apellido paterno: </label>
            <input onChange={onChange} type="text" value={form.ap} name="ap" id="ap" ></input><br></br>
            <label>Apellido materno: </label>
            <input onChange={onChange} type="text" value={form.am} name="am" id="am"></input><br></br>
            <label>Email: </label>
            <input onChange={onChange} onBlur={onBlur} value={form.correo} type="email" id="correo" name="correo" className="" autoComplete="off" required></input><br></br>
            <label>Contraseña: </label>
            <input onChange={onChange} onBlur={validarPassLength} value={form.contra} type="password" id="contra" name="contra" className="" autoComplete="off" required></input><br></br>
            <label>Repetir contraseña: </label>
            <input onChange={onChange} onBlur={validarPass} onPaste={onPaste} value={form.vcontra} type="password" id="vcontra" name="vcontra" className="" autoComplete="off" required></input><br></br>
            <input type="submit"></input>
            </form>        

            <div className="validaciones">
                {validaciones.existeCorreo?<h3>El correo ya existe</h3>:""}
                {validaciones.existeUsuario?<h3>El usuario ya existe</h3>:""}
                {!validaciones.coincidePass?<h3>Las contraseñas no coinciden</h3>:""}
                {validaciones.passLength === 8?"":<h3>Las contraseña debe ser de 8 carácteres</h3>}
            </div>
        </div>
    )
}