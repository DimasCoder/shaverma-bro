import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";

class FooterSocialIcon extends Component {
    render() {
        return (
            <div className="social-icons">
                <p>{this.props.text}</p>
                <div className="circle-icon insta-icon">
                    <FontAwesomeIcon icon={this.props.icon}/>
                </div>
            </div>
        );
    }
}

export default FooterSocialIcon;