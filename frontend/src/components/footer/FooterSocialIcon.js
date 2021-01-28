import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";

class FooterSocialIcon extends Component {
    render() {
        return (
            <a href={this.props.url} className="social-icons">
                <p>{this.props.text}</p>
                <div className="circle-icon insta-icon">
                    <FontAwesomeIcon icon={this.props.icon}/>
                </div>
            </a>
        );
    }
}

export default FooterSocialIcon;