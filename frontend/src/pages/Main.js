import React, {Component} from 'react';
import "../App.css";
import Intro from "../components/Intro";
import Reviews from "../components/reviews/Reviews";
import Menu from "../components/MenuToggles.js";
import MetaTags from 'react-meta-tags';

export default class Main extends Component {

    render() {
        return (
            <>
                <MetaTags>
                    <title>Шаверма Бро - найсмачніша шаверма в Рівному</title>
                    <meta id="meta-description" name="description" content="Shaverma Bro - переходь на темну сторону. Ви можете скуштувати смачну шаверму в чорному лаваші лише в нас." />
                    <meta id="og-title" property="og:title" content="Шаверма Бро | Shaverma BRO" />
                </MetaTags>
                <Intro/>
                <Menu cartItems={this.props.cartItems} addToCart={this.props.addToCart} plus={this.props.plus} />
                <div className="line"></div>
                <Reviews/>
            </>
        )
    }
}
