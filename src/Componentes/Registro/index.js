import React, { Component } from 'react'

export default class Registro extends Component {
    render() {
        return (
            <div>
                <h1 className="mt-4">Registrate y chatea</h1>
                <h5 className="mb-4">Una grande comunidad</h5>
                <form>
                    <div class="row mb-2">
                        <div class="col pr-1">
                            <input type="text" class="form-control" placeholder="Nombre" />
                        </div>
                        <div class="col pl-1">
                            <input type="text" class="form-control" placeholder="Apellido" />
                        </div>
                    </div>
                    <input type="email" class="form-control mb-2" placeholder="Correo electrónico" />
                    <input type="password" class="form-control  mb-4" placeholder="Nueva contraseña" />
                    <label>Fecha de Nacimiento</label>
                    <input type="date" class="form-control mb-4" />
                    <label>Genero</label>
                    <div class="form-check mb-4">
                        <div class="row">
                            <div class="col">
                                <input class="form-check-input" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..." />
                                <label>Femenino</label>
                            </div>
                            <div class="col">
                                <input class="form-check-input " type="radio" name="blankRadio" id="blankRadio1" value="option2" aria-label="..." />
                                <label>Masculino</label>
                            </div>
                            <div class="col">
                                <input class="form-check-input " type="radio" name="blankRadio" id="blankRadio1" value="option2" aria-label="..." />
                                <label>Otro</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-info btn-lg mb-3">Registrarse</button>
                </form>
            </div>

        )
    }
}
