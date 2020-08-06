import React, { Component } from 'react'
import Login from '../Login'

export default class Header extends Component {
    render() {
        return (
            <div class="bg-dark">
            <nav class="navbar navbar-dark bg-dark container">
                <a class="navbar-brand" href="#"><h1>JamChat</h1></a>

                <div class="navbar-nav ">
                    <Login/>
                </div>
            </nav>
            </div>
        )
    }
}
