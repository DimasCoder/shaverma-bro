import React, {Component} from 'react';
import OrderProgress from "../components/OrderProgress";
import OrderForm from "../components/OrderForm";
import PageTitle from "../components/PageTitle";

class Checkout extends Component {

    componentDidMount() {
        document.title = 'Оформлення замовлення'
    }

    render() {

        return (
            <>
                <PageTitle title={"Оформлення замовлення"}/>
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