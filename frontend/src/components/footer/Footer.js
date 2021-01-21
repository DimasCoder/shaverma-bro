import React, {Component} from 'react';
import FooterLogo from "./FooterLogo";
import FooterInstagram from "./FooterInstagram";
import FooterInfo from "./FooterInfo";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-container">
                    <FooterLogo/>
                    <FooterInstagram/>
                    <FooterInfo/>
                </div>
                <div className="footer-privacy">
                    <p><span>©</span>{new Date().getFullYear()} SHAVERMA <span>BRO</span> | All rights reserved </p>
                </div>
            </footer>
        );
    }
}

export default Footer;