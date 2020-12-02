import React, {Component} from 'react';
import "../App.css";
import {Row} from 'react-bootstrap';
import Card from "./FoodCard.js";
import axios from "axios";


export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shavermas: [],
            price: ''
        };
    }

    componentDidMount() {
        this.findAllPosts();
    }

    findAllPosts() {
        axios.get("/api/shaverma/all")
            .then(response => response.data)
            .then((data) => {
                this.setState({shavermas: data})
            });
    }

    render() {
        const {shavermas} = this.state;
        return (
            <div className="menu">
                <Row className="menu-items">
                    {shavermas.map((shaverma, index) => (
                        shaverma.category === this.props.category &&
                        <Card cartItems={this.props.cartItems} addToCart={this.props.addToCart} plus={this.props.plus} key={index} shaverma={shaverma}/>
                    ))}
                </Row>
                <hr/>
            </div>
        )
    }
}
