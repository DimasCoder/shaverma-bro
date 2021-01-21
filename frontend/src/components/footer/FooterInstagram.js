import React, {Component} from 'react';
import InstagramCard from "./InstagramCard";
import CircleIcon from "../header/CircleIcon";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class FooterInstagram extends Component {
    render() {
        return (
            <div className="footer-instagram-container">
                <div className="instagram-card">
                    <div className="instagram-icon">
                        <div className="circle-icon insta-icon">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </div>
                    </div>
                    <div className="instagram-info">
                        <p><span>@</span>shaverma-bro-rivne</p>
                        <p>З новим сметанковим соусом з часником та зеленню🍃 ,що додає одночасно ніжності та пікантності
                            Shaverma <span>Laksheri</span>😌</p>
                    </div>
                </div>
                <div className="instagram-card">
                    <div className="instagram-icon">
                        <div className="circle-icon insta-icon">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </div>
                    </div>
                    <div className="instagram-info">
                        <p><span>@</span>shaverma-bro-rivne</p>
                        <p>З новим сметанковим соусом з часником та зеленню🍃 ,що додає одночасно ніжності та пікантності
                            Shaverma <span>Laksheri</span>😌</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterInstagram;