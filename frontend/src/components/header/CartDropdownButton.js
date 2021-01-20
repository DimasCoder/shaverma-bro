import React, {Component} from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import BasketProductCard from "./BasketProductCard";
import RedButton from "../RedButton";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBasket} from '@fortawesome/free-solid-svg-icons'

class CartDropdownButton extends Component {

    render() {
        const {cartItems} = this.props;
        return (
            <div>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant="danger" className="nav-dropdown-basket"
                                     id="dropdown-basic">
                        <FontAwesomeIcon icon={faShoppingBasket}/>
                        <span
                            className="ml-1"> {cartItems.reduce((a, c) => a + c.countOfOneProduct, 0)}</span><span className="responsive-span"> товарів</span>
                        <span
                            className="ml-1 responsive-span"> ₴{cartItems.reduce((a, c) => a + c.price * c.countOfOneProduct, 0)}.00</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="nav-dropdown-menu">
                        <Dropdown.Header className="nav-dropdown-header">
                            <div className="nav-dropdown-thead-left">
                                <p>Товар</p>
                                <p>Ціна</p>
                            </div>
                            <div className="nav-dropdown-thead-right">
                                <p>Кількість</p>
                                <p>{cartItems.reduce((a, c) => a + c.price * c.countOfOneProduct, 0)}.00₴</p>
                            </div>
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
                            <RedButton link={"/cart"} text={"Оформити замовлення"} icon={faShoppingBasket} />
                        </div>
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }
}

export default CartDropdownButton;