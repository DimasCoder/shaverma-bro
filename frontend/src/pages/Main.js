import React, {Component} from 'react';
import "../App.css";
import Intro from "../components/Intro";
import Reviews from "../components/reviews/Reviews";
import Menu from "../components/MenuToggles.js";



export default class Main extends Component {

    render() {
        return (
            <>
                <Intro/>
                <Menu cartItems={this.props.cartItems} addToCart={this.props.addToCart} plus={this.props.plus} />
                <div className="line"></div>
                <Reviews/>
            </>
        )
    }
}
