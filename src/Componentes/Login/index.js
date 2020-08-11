import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import "./Style.css"

export default class Login extends Component {

    render() {
        return (
            <form class="my-2 d-flex container">
                <div className="container">

                    <div className="row d-flex justify-content-end">
                        <div className="col-lg-3 p-0 mr-lg-1">
                            <input class="form-control mt-5 mt-lg-0" type="email" placeholder="Correo electrónico" aria-label="Mail" />
                        </div>
                        <div className="col-lg-3 p-0 mr-lg-1">
                            <input class="form-control mr-lg-1 mt-3 mt-lg-0" type="password" placeholder="Contraseña" aria-label="Password" />
                        </div>
                        <div className="col-lg-2 py-0 px-0">
                            <button class="btn btn-info mt-3 mt-lg-0 btn-block" type="buttom">Ingresar</button>
                            <hr className="d-lg-none"></hr>
                        </div>
                    </div>
                    
                    <div className="row d-lg-none">
                        <div className="col">
                            <button class="btn btn-success btn-block mt-3" type="button">Registrarse</button>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-end">
                        <div className="col-lg-5 p-0 d-flex">
                            <a class="mx-auto mx-lg-0 mt-3 mb-5 my-lg-0" id="OlvideContra"><small>Olvide mi contraseña</small></a>
                        </div>
                    </div>

                </div>


            </form >
        )
    }
}
