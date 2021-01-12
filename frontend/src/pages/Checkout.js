import React, {Component} from 'react';
import axios from "axios";
import OrderProgress from "../components/OrderProgress";
import RedButton from "../components/RedButton";
import OrderForm from "../components/OrderForm";

class Checkout extends Component {

    render() {

        return (
            <>
                <OrderProgress first={"true"} second={"true"}/>
                <div className="checkout-container">
                    <div className="data-form">
                            <OrderForm cartItems={this.props.cartItems}/>
                    </div>
                    <div className="check">

                    </div>
                </div>

            </>
        );
    }
}

export default Checkout;