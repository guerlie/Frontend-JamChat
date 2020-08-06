import React, { Component } from 'react'
import ImgChat from './CelChat.png'

export default class Presentacion extends Component {
    render() {
        return (
            <div>
                <h1 className="mt-4 text-center">Empieza a chatear ahora!</h1>
                <img src={ImgChat} className="mx-auto d-block" style={{width:"50%"}}/>
            </div>
        )
    }
}
