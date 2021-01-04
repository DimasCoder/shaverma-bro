import React from 'react';
import './App.css';
import Header from "./components/Header.js";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/Main.js';
import Delivery from './pages/Delivery.js';
import Reviews from './pages/ReviewPage.js';
import Faq from './pages/FAQ.js';
import Ordering from "./pages/Ordering";
import * as ReactGA from "react-ga";

ReactGA.initialize('UA-150128199-1');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
        }
    }

    useEffect() {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }




    addToCart = (product, price, countOfOneProduct) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach((item) => {
            console.log("price : " + price + "item.price : " + item.price)
            if (item.id === product.id && price == item.price) {
                item.count++;
                alreadyInCart = true
            }
        });
        if (!alreadyInCart) {
            countOfOneProduct = +countOfOneProduct
            cartItems.push({...product, count: 1, price, countOfOneProduct});
        }
        this.setState({cartItems});
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }

    removeFromCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        cartItems.forEach((item) => {
            if(product.id === item.id && product.price == item.price){
                console.log(item.id)
                cartItems.splice(cartItems.indexOf(item), 1)
            }
        })
        this.setState({cartItems})
        /*this.setState({
            cartItems: cartItems.filter((x) => x.id === shaverma.id && shaverma.price != x.price),
        });*/
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };

    plus = (product, count) => {
        const cartItems = this.state.cartItems.slice()
        product.countOfOneProduct++;
        this.setState({count: count + 1});
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };

    minus = (product, count) => {
        const cartItems = this.state.cartItems.slice()
        if (product.countOfOneProduct > 1) {
            product.countOfOneProduct--;
            this.setState({count: count - 1});
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
    };

    render() {
        return (
            <>
                <Router>
                    <Header cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} plus={this.plus}
                            minus={this.minus}/>
                    <Switch>
                        <Route exact path="/"
                               render={() => <Main cartItems={this.state.cartItems} addToCart={this.addToCart}
                                                   plus={this.plus}/>}/>
                        <Route exact path="/delivery" component={Delivery}/>
                        <Route exact path="/reviews" component={Reviews}/>
                        <Route exact path="/faq" component={Faq}/>
                        <Route exact path="/ordering" render={() => <Ordering cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} plus={this.plus}
                                                                              minus={this.minus}/>}/>
                    </Switch>
                </Router>
            </>
        );
    }
}
export default App;
