import React, { Component } from 'react'
import Login from '../Login'

export default class Header extends Component {

    constructor(props){
        super(props)
        this.state = {pantalla: window.innerWidth};
    }

    render() {
        console.log(this.state.pantalla);

        if(this.state.pantalla<993){
            return(
                <div class="bg-dark">
                <nav class="navbar navbar-dark bg-dark container">
                    <a class="navbar-brand" href="#"><h1>JamChat</h1></a>
                </nav>
                </div>
            );
        }else{
            return(
                <div class="bg-dark">
                <nav class="navbar navbar-dark bg-dark container">
                    <a class="navbar-brand" href="#"><h1>JamChat</h1></a>
                    <div class="navbar-nav ">
                        <Login/>
                    </div>
                </nav>
                </div>
            );
        }
    }


}
