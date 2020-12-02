import React, {Component} from 'react';
import BasketProductCard from "../components/BasketProductCard";
import axios from "axios";
import Circle from "../components/Circle";

export default class Ordering extends Component {

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
        this.orderChange = this.orderChange.bind(this);
    }

    pushOrder = () => {
        const cartItems = this.state.cartItems.slice()
        if (cartItems.length === 0) {
            alert("Корзина пуста!")
        } else {
            cartItems.forEach((item) => {
                axios.post("https://shaverma-bro-backend.herokuapp.com/api/order/api/order", {
                    firstName: this.state.firstName,
                    secondName: this.state.surName,
                    address: this.state.address,
                    email: this.state.email,
                    category: item.category,
                    productName: item.foodName,
                    size: item.price == item.priceMini ? "Mini" : item.price == item.priceMiddle ? "Middle" : item.price == item.priceMaxi && "Maxi",
                    price: item.price,
                    quantity: item.countOfOneProduct,
                    number: this.state.number,
                    totalCost: cartItems.reduce((a, c) => a + c.price * c.countOfOneProduct, 0) + ".00₴",
                })
            })
            alert("Ваше замовлення відправлено!")
            localStorage.clear()
        }
    }

    orderChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const {cartItems} = this.props;
        const {firstName, surName, address, number, email} = this.state;
        return (
            <>
                <div className="order-container">
                    <div className="order-row">
                        <Circle/>
                        <Circle/>
                        <Circle/>
                        <div className="order-col">
                            <p>Ім'я</p>
                            <input required={true} type="input" value={firstName} name="firstName"
                                   onChange={this.orderChange} placeholder="Ваше ім'я"/>
                            <p>Адреса</p>
                            <input required={true} type="input" value={address} name="address"
                                   onChange={this.orderChange} placeholder="Ваша адреса"/>
                            <p>E-mail</p>
                            <input type="email" value={email} name="email" onChange={this.orderChange}
                                   placeholder="Ваш e-mail"/>
                        </div>
                        <div className="order-col">
                            <p>Прізвище</p>
                            <input required={true} type="input" value={surName} name="surName"
                                   onChange={this.orderChange} placeholder="Ваше прізвище"/>
                            <p>Номер телефону</p>
                            <input required={true} type="input" value={number} name="number" onChange={this.orderChange}
                                   placeholder="Ваш номер"/>
                        </div>
                    </div>
                    <div className="order-row">
                        <button type="submit" className="btn-finish-order" onClick={this.pushOrder}><a
                            href="/">Замовити</a></button>
                    </div>
                    <div className="">
                        <div className="order-col">
                            {cartItems && cartItems.map(item => (
                                <BasketProductCard item={item} cartItems={cartItems}
                                                   removeFromCart={this.props.removeFromCart}
                                                   plus={this.props.plus} minus={this.props.minus}/>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
