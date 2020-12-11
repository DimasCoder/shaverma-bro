import React, {Component} from 'react';
import "../App.css";
import {Row} from 'react-bootstrap';
import Card from "./FoodCard.js";
import axios from "axios";


export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            price: ''
        };
    }

    componentDidMount() {
        this.findAllPosts();
    }

    findAllPosts() {
        axios.get("/api/product/all")
            .then(response => response.data)
            .then((data) => {
                this.setState({products: data})
            });
    }

    render() {
        const {products} = this.state;
        return (
            <div className="menu">
                <Row className="menu-items">
                    {products.map((product, index) => (
                        product.category === this.props.category &&
                        <Card cartItems={this.props.cartItems} addToCart={this.props.addToCart} plus={this.props.plus} key={index} product={product}/>
                    ))}
                </Row>
                <hr/>
            </div>
        )
    }
}
