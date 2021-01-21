import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faFacebookSquare, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faMapMarkedAlt, faPhone} from "@fortawesome/free-solid-svg-icons";
import FooterSocialIcon from "./FooterSocialIcon";

class FooterInfo extends Component {
    render() {
        return (
            <div className="footer-info-container">
                <FooterSocialIcon icon={faInstagram} text={"Instagram"}/>
                <FooterSocialIcon icon={faFacebookSquare} text={"Facebook"}/>
                <FooterSocialIcon icon={faMapMarkedAlt} text={"вул.Гагаріна, NOVUS"}/>
            </div>
        );
    }
}

export default FooterInfo;