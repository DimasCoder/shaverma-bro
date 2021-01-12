import React, {Component} from 'react';

class ProgressCircle extends Component {
    render() {
        let className = 'progress-circle';
        if (this.props.first === "true") {
            className += ' progress-circle-active';
        }
        if (this.props.second === "true") {
            className += ' progress-circle-active';
        }
        if (this.props.third === "true") {
            className += ' progress-circle-active';
        }
        return (
            <div className={className}>
                {this.props.number}
            </div>
        );
    }
}

export default ProgressCircle;