import React, { Component } from 'react'
import Presentacion from '../Presentacion'
import Registro from '../Registro'

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Presentacion />
                    </div>
                    <div className="col">
                        <Registro />
                    </div>
                </div>

            </div>
        )
    }
}
