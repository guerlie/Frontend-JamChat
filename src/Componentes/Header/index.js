import React, { useState, useEffect } from 'react'
import Login from '../Login'

export default function Header() {

    const [pantallaX, setPantallaX] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => { setPantallaX(window.innerWidth) })
        console.log("Estoy en effect")
    }, [])

    if (pantallaX < 992) {
        return (
            <div class="bg-dark">
                <nav class="navbar navbar-dark bg-dark container">
                    <div className="row">
                        <div className="col  d-flex justify-content-center">
                            <a class="navbar-brand" href="#"><h1>JamChat</h1></a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    } else {
        return (
            <div class="bg-dark">
                <nav class="navbar navbar-dark bg-dark container">
                    <div className="row">
                        <div className="col-3">
                            <a class="navbar-brand" href="#"><h1>JamChat</h1></a>
                        </div>
                        <div className="col-9">
                            <div class="navbar-nav ">
                                <Login />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
