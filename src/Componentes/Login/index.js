import React, { Component } from 'react'
import "./Style.css"

export default class Login extends Component {
    render() {
        return (
            <form class="form-inline my-2 justify-content-end container-fluid">
                <div className="row">
                    <div className="col-12 d-flex">
                        <div className="ml-auto">
                        <input class="form-control-sm mr-1" type="email" placeholder="Correo electrónico" aria-label="Mail" />
                        <input class="form-control-sm mr-1" type="password" placeholder="Contraseña" aria-label="Password" />
                        <button class="btn btn-outline-info btn-sm my-2 my-sm-0" type="submit">Ingresar</button>
                        </div>
                        
                    </div>
                    <div className="col-7 d-flex">
                    </div>
                    <div className="col-5 d-flex">
                        <a class="mr-auto ml-0" id="OlvideContra"><small>Olvide mi contraseña</small></a>
                    </div>
                </div>

            </form>
        )
    }
}
