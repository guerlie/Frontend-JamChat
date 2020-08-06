import React, { Component } from 'react'
import Presentacion from '../Presentacion'
import Registro from '../Registro'
import "./Style.css"

export default class Home extends Component {
    render() {
        return (
            <div id="FondoHome">
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <Presentacion />
                    </div>
                    <div className="col-5">
                        <Registro />
                    </div>
                </div>

            </div>
            </div>
        )
    }
}
