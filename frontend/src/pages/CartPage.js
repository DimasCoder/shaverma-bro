import React, {Component} from 'react';
import BasketProductCard from "../components/BasketProductCard";
import axios from "axios";
import ProgressCircle from "../components/ProgressCircle";
import PageTitle from "../components/PageTitle";
import OrderProgress from "../components/OrderProgress";
import RedButton from "../components/RedButton";

export default class CartPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            surName: '',
            address: '',
            number: '',
            email: '',
            totalCost: 0,
            cartItems: props.cartItems
        }
    }

    render() {
        const {cartItems} = this.props;
        return (
            <>
                <PageTitle title={"Оформити замовлення"}/>
                <OrderProgress first={"true"}/>
                <div className="order-container">
                    <div className="">
                        <div className="order-col">
                            {cartItems && cartItems.map(item => (
                                <BasketProductCard item={item} cartItems={cartItems}
                                                   removeFromCart={this.props.removeFromCart}
                                                   plus={this.props.plus} minus={this.props.minus}/>
                            ))}
                        </div>
                    </div>
                    <RedButton link={"/checkout"} text={"Перейти до оформлення"} />
                </div>
            </>
        );
    }
}
