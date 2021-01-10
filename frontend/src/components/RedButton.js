import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment} from "@fortawesome/free-solid-svg-icons";

class RedButton extends Component {
    render() {
        return (
            <>
                <Link exact to={this.props.link} className="btn-red">{this.props.text} &nbsp;<FontAwesomeIcon
                    icon={this.props.icon}/></Link>
            </>
        );
    }
}

export default RedButton;