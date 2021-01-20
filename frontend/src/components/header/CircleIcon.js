import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class CircleIcon extends Component {
    render() {
        return (
            <div className="circle-icon">
                <FontAwesomeIcon icon={this.props.icon}/>
            </div>
        );
    }
}

export default CircleIcon;