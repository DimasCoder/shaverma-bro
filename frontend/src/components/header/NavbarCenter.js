import React, {Component} from 'react';
import {Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo1.png";
import CartDropdownButton from "./CartDropdownButton";

class NavbarCenter extends Component {
    render() {
        return (
            <div className="nav-bar-center">
                <div className="div-toggle-responsive">
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <div className="toggler-bar"><FontAwesomeIcon icon={faBars}/></div>
                    </Navbar.Toggle>
                </div>
                <Navbar.Brand href="/" className="nav-bar-brand">
                    <img
                        src={logo}
                        className="nav-brand-logo"
                        alt="Shaverma Bro logo"
                    />
                </Navbar.Brand>
                <div className="nav-bar-mobile-cart">
                <CartDropdownButton cartItems={this.props.cartItems}/>
                </div>
            </div>
        );
    }
}

export default NavbarCenter;