import React, {Component} from 'react';

class ProgressLine extends Component {
    render() {
        let className = 'progress-line';
        if (this.props.first === "true") {
            className += ' progress-line-active';
        }
        if (this.props.second === "true") {
            className += ' progress-line-active';
        }
        return (
            <div className={className}>

            </div>
        );
    }
}

export default ProgressLine;