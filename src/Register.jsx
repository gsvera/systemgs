import React from 'react'
import './App.css'
import registro from './registro.jpg'


const Register = () => (
    <div classname="container">
        <div className="container-img">
            <img src={registro} />
        </div>
        <div>
            <label className="label">Nombre</label>
            <input id="name" className="text-box" type="text" placeholder="Ingrese su nombre"></input>
            <label className="label">Apellido</label>
            <input id="last_name" className="text-box" type="text" placeholder="Ingrese su apellido"></input>
            <label className="label">Edad</label>
            <input id="age" className="text-box" type="number" placeholder="Ingrese su edad"></input>
            <label className="label">Fecha de nacimiento</label>
            <input id="date" className="text-box" type="date" placeholder="Ingrese la fecha"></input>
        </div>
    </div>
)

export default Register