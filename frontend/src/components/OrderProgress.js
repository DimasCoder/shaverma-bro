import React, {Component} from 'react';
import ProgressCircle from "./ProgressCircle";
import ProgressLine from "./ProgressLine";


export default class OrderProgress extends Component {
    render() {
        return (
            <>
                <div className="ordering-progress-container">
                    <ProgressCircle first={this.props.first} number={"1"}/>
                    <ProgressLine first={this.props.first}/>
                    <ProgressCircle second={this.props.second} number={"2"}/>
                    <ProgressLine second={this.props.second}/>
                    <ProgressCircle third={this.props.third} number={"3"}/>
                </div>
            </>
        );
    }
}
