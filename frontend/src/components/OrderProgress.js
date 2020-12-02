import React, {Component} from 'react';
import Circle from "./Circle";


export default class OrderProgress extends Component {
    render() {
        return (
            <>
                <div className="circle-container">
                    <Circle/>
                    <Circle/>
                    <Circle/>
                </div>
            </>
        );
    }
}
