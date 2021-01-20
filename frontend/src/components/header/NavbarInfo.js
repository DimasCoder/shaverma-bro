import React, {Component} from 'react';
import CircleIcon from "./CircleIcon";
import {faClock, faStopwatch, faPhone} from '@fortawesome/free-solid-svg-icons'
import CartDropdownButton from "./CartDropdownButton";


class NavbarInfo extends Component {

    render() {
        const {side} = this.props;
        return (
            <>
            {side === "left" ?
            <div className="nav-bar-info">
                <CircleIcon icon={faPhone}/>
                <a href="tel:+380-98-309-0726"><span>(</span>+380<span>)</span>-98-309-0726</a>
                <CircleIcon icon={faClock}/>
                <time>10<span>:</span>00<span>-</span>20<span>:</span>00</time>
            </div>
            :
                <div className="right">
                <CartDropdownButton cartItems={this.props.cartItems}/>
                </div>
            }

            </>
        );
    }
}

export default NavbarInfo;