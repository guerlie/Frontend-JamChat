import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <form class="form-inline my-2 justify-content-end">
                <input class="form-control mr-1" type="email" placeholder="Mail" aria-label="Mail" />
                <input class="form-control mr-1" type="password" placeholder="Password" aria-label="Password" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        )
    }
}
