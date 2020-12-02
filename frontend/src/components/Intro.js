import React, {Component} from 'react';
import "../App.css";
import bro from "../assets/bro3d.png";

export default class Intro extends Component {
    render() {


        return (
            <>
                <div className="container-intro">
                    <div className="intro-text">
                        <h3><span>Shaverma BRO</span> Обери свою чорну насолоду!</h3>
                    </div>
                    <div className="intro-image">
                        <img
                            className="bro-img"
                            src={bro}
                        />
                    </div>
                </div>
            </>
        )
    }
}
