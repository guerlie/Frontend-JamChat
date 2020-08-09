import React, { useEffect, useState } from 'react'
import Presentacion from '../Presentacion'
import Registro from '../Registro'
import "./Style.css"
import Login from '../Login';

export default function Home() {

    const [pantallaX, setPantallaX] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => { setPantallaX(window.innerWidth) })
    }, [])

    if (pantallaX < 992) {
        return (
            <div id="FondoHome">
                <Login />
            </div>

        )
    } else {
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
