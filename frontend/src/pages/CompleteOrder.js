import React, {Component} from 'react';
import OrderProgress from "../components/OrderProgress";

class CompleteOrder extends Component {
    render() {
        return (
            <>
                <OrderProgress first={"true"} second={"true"} third={"true"}/>

            </>
        );
    }
}

export default CompleteOrder;