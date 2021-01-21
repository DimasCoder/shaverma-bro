import React from 'react';
import './App.css';
import Header from "./components/header/Header.js";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/Main.js';
import Delivery from './pages/Delivery.js';
import Reviews from './pages/ReviewPage.js';
import Faq from './pages/FAQ.js';
import CartPage from "./pages/CartPage";
import * as ReactGA from "react-ga";
import PostPage from "./pages/ReviewFormPage";
import Checkout from "./pages/Checkout";
import CompleteOrder from "./pages/CompleteOrder";
import Footer from "./components/footer/Footer";

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
        console.log(cartItems.length)
    }

    removeFromCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        if(cartItems.length !== 1){
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
        }else if(cartItems.length === 1){
            cartItems.forEach((item) => {
                if(product.id === item.id && product.price == item.price){
                    console.log(item.id)
                    cartItems.splice(cartItems.indexOf(item), 1)
                }
            })
            localStorage.clear()
            this.setState({cartItems})

        }

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
                    <div className="main-container">
                    <Header cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} plus={this.plus}
                            minus={this.minus}/>
                            <div className="mainnn">
                    <Switch>
                        <Route exact path="/"
                               render={() => <Main cartItems={this.state.cartItems} addToCart={this.addToCart}
                                                   plus={this.plus}/>}/>
                        <Route exact path="/delivery" component={Delivery}/>
                        <Route exact path="/reviews" component={Reviews}/>
                        <Route exact path="/faq" component={Faq}/>
                        <Route exact path="/cart" render={() => <CartPage cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} plus={this.plus}
                                                                              minus={this.minus}/>}/>
                        <Route exact path="/checkout" render={() => <Checkout cartItems={this.state.cartItems}/>}/>
                        <Route exact path="/complete" component={CompleteOrder}/>
                        <Route exact path="/post" component={PostPage}/>

                    </Switch>
                            </div>
                    <Footer/>
                    </div>
                </Router>
            </>
        );
    }
}
export default App;
