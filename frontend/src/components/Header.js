import React, {Component} from 'react';
import "../App.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faClock, faPhone, faShoppingBasket} from '@fortawesome/free-solid-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {Nav, Navbar} from 'react-bootstrap';
import logo from "../assets/logo1.png";
import {Link, NavLink} from 'react-router-dom';
import Dropdown from "react-bootstrap/Dropdown";
import BasketProductCard from "./BasketProductCard";

export default class Header extends Component {



    render() {
        const {cartItems} = this.props

        return (
            <>
                <Navbar collapseOnSelect expand="md" fluid="true" style={{paddingLeft: 0, paddingRight: 0}}>
                    <div className="navbar-container">
                        <div className="nav-col">
                            <div className="topbar-row-left">
                                <div className="topbar-info">
                                    <div className="nav-icon">
                                        <FontAwesomeIcon icon={faPhone}/>
                                    </div>
                                    <a href="tel:+380-98-309-0726"><span>(</span>+380<span>)</span>-98-309-0726</a>
                                </div>

                                <div className="topbar-info">
                                    <div className="nav-icon">
                                        <FontAwesomeIcon icon={faClock}/>
                                    </div>
                                    <time>10<span>:</span>00<span>-</span>20<span>:</span>00</time>
                                </div>
                            </div>
                            <div className="mainbar-row-left">
                                <Navbar.Collapse className="collapse-left">
                                    <Nav className="nav-left">
                                        <NavLink exact activeClassName="active" to="/"
                                                 className="header-nav-link"> ГОЛОВНА</NavLink>
                                        <NavLink exact activeClassName="active" to="/delivery"
                                                 className="header-nav-link"> ДОСТАВКА</NavLink>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                        </div>
                        <div className="nav-col-center">
                            <div className="div-toggle-responsive">
                                <Navbar.Toggle aria-controls="basic-navbar-nav">
                                    <div className="toggler-bar"><FontAwesomeIcon icon={faBars}/></div>
                                </Navbar.Toggle>
                            </div>
                            <div className="div-navbar-brand">
                                <Navbar.Brand href="/" className="m-auto">
                                    <img
                                        src={logo}
                                        className="bro-logo"
                                        alt="Logo"
                                    />
                                </Navbar.Brand>
                            </div>
                            <div className="div-basket-md">
                                <Dropdown alignRight>
                                    <Dropdown.Toggle variant="danger" className="nav-dropdown-basket"
                                                     id="dropdown-basic">
                                        <FontAwesomeIcon icon={faShoppingBasket}/>
                                        <span className=""> {cartItems.length === 0 ? 0 : cartItems.reduce((a, c) => a + c.countOfOneProduct, 0)}</span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="nav-dropdown-menu">
                                        <Dropdown.Header className="nav-dropdown-header">
                                            <p>Кошик</p>
                                            <p>{cartItems.reduce((a, c) => a + c.price * c.countOfOneProduct, 0)}.00₴</p>
                                        </Dropdown.Header>
                                        {cartItems.length === 0 ?
                                            <div className="empty-basket">
                                                <p>Кошик пустий</p>
                                            </div> :
                                            cartItems.map(item => (
                                                <BasketProductCard item={item} cartItems={cartItems}
                                                                   removeFromCart={this.props.removeFromCart}
                                                                   plus={this.props.plus} minus={this.props.minus}/>
                                            ))
                                        }
                                        <Dropdown.Divider/>
                                        {cartItems.length !== 0 &&
                                        <div className="nav-order-container">
                                            <Link exact to="/ordering" className="btn-order">Оформити
                                                замовлення <FontAwesomeIcon
                                                    icon={faShoppingBasket}/></Link>
                                        </div>
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="nav-col">
                            <div className="topbar-row-right">
                                <div className="div-cart">
                                    <a className="nav-icon-inst" href="https://www.instagram.com/shaverma_bro_rivne/">
                                        <FontAwesomeIcon icon={faInstagram}/>
                                    </a>
                                    <Dropdown alignRight>
                                        <Dropdown.Toggle variant="danger" className="nav-dropdown-basket"
                                                         id="dropdown-basic">
                                            <FontAwesomeIcon icon={faShoppingBasket}/>
                                            <span
                                                className="ml-1"> {cartItems.reduce((a, c) => a + c.countOfOneProduct, 0)} товарів</span>
                                            <span
                                                className="ml-1"> ₴{cartItems.reduce((a, c) => a + c.price * c.countOfOneProduct, 0)}.00</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className="nav-dropdown-menu">
                                            <Dropdown.Header className="nav-dropdown-header">
                                                <p>Кошик</p>
                                                <p>{cartItems.reduce((a, c) => a + c.price * c.countOfOneProduct, 0)}.00₴</p>
                                            </Dropdown.Header>
                                            {cartItems.length === 0 ?
                                                <div className="empty-basket">
                                                    <p>Кошик пустий</p>
                                                </div> :
                                                cartItems.map(item => (
                                                    <BasketProductCard item={item} cartItems={cartItems}
                                                                       removeFromCart={this.props.removeFromCart}
                                                                       plus={this.props.plus} minus={this.props.minus}/>
                                                ))}
                                            <Dropdown.Divider/>
                                            {cartItems.length !== 0 &&
                                            <div className="nav-order-container">
                                                <NavLink exact to="/ordering" className="btn-order">Оформити
                                                    замовлення</NavLink>
                                            </div>
                                            }
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="mainbar-row-right">
                                <Navbar.Collapse className="collapse-right">
                                    <Nav className="nav-right">
                                        <NavLink exact activeClassName="active" to="/reviews"
                                                 className="header-nav-link"> ВIДГУКИ</NavLink>
                                        <NavLink exact activeClassName="active" to="/faq"
                                                 className="header-nav-link"> ПРО НАС</NavLink>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                        </div>
                    </div>
                </Navbar>

            </>
        )
    }
}
