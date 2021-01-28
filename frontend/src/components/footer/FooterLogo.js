import React, {Component} from 'react';
import logo from "../../assets/logo1.png";

class FooterLogo extends Component {
    render() {
        return (
            <div className="footer-logo-container">
                <img
                    className="footer-logo"
                src={logo}
                    alt={"footer logo"}
                />
            </div>
        );
    }
}

export default FooterLogo;