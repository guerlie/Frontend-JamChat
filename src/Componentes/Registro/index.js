import React, { Component } from 'react'

export default class Registro extends Component {
    render() {
        return (
            <div>
                <h1>Registrate y chatea</h1>
                <h5>Una grande comunidad</h5>
                <form>
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="First name" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Last name" />
                        </div>
                    </div>
                    <input type="email" class="form-control" placeholder="Email" />
                    <input type="password" class="form-control" placeholder="New password" />
                    <label>Fecha de Nacimiento</label>
                    <input type="date" class="form-control" />
                    <label>Genero</label>
                    <div class="form-check">
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
                    <button type="submit" class="btn btn-success">Enviar</button>
                </form>
            </div>

        )
    }
}
