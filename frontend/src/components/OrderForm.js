import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class OrderForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            secondName: '',
            address: '',
            number: '',
            email: '',
            totalCost: 0,
            cartItems: props.cartItems
        }
        this.inputChange = this.inputChange.bind(this);
    }

    pushOrder = () => {
        const temp = localStorage.getItem("cartItems");
        console.log(temp)
        const cartItems = this.state.cartItems.slice();
        console.log(cartItems)
        if (!localStorage.getItem("cartItems")) {
            alert("Корзина пуста!")
        } else {
            cartItems.forEach((item) => {
                axios.post("api/order", {
                    firstName: this.state.firstName,
                    secondName: this.state.secondName,
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
            localStorage.clear()
            alert("Ваше замовлення відправлено!")
        }
    }

    inputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        const {firstName, secondName, address, number, email} = this.state;
        return (
            <>
                <div className="order-form-border">
                    <div className="order-form-input-container">
                        <div>
                            <p>Ім'я</p>
                            <input className="review-form-input" required={true} type="input" value={firstName}
                                   name="firstName"
                                   onChange={this.inputChange} placeholder="Ваше ім'я"/>
                        </div>
                        <div>
                            <p>Прізвище</p>
                            <input className="review-form-input" required={true} type="input" value={secondName}
                                   name="secondName"
                                   onChange={this.inputChange} placeholder="Ваше прізвище"/>
                        </div>
                    </div>
                    <div className="order-form-input-container">

                        <div>
                            <p>Адреса</p>
                            <input className="review-form-input" required={true} type="input" value={address}
                                   name="address"
                                   onChange={this.inputChange} placeholder="Ваша адреса"/>
                        </div>
                        <div>
                            <p>Номер телефону</p>
                            <input className="review-form-input" required={true} type="input" value={number}
                                   name="number"
                                   onChange={this.inputChange} placeholder="Ваш номер телефону"/>
                        </div>
                    </div>
                        <div>
                            <p>Email</p>
                            <input className="review-form-input" required={true} type="email" value={email}
                                   name="email"
                                   onChange={this.inputChange} placeholder="example@gmail.com"/>
                        </div>

                        <div className="review-btn-container">
                            <button type="submit" className="review-btn-send" onClick={this.pushOrder}><a
                                href="/complete">Підтвердити замовлення</a></button>
                        </div>

                </div>
            </>
        );
    }
}

export default OrderForm;