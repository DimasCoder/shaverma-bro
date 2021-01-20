import React, {Component} from 'react';
import NavbarLinks from "./NavbarLinks";
import NavbarInfo from "./NavbarInfo";
import {Navbar} from "react-bootstrap";

class NavbarSide extends Component {
    render() {
        const {titleLeft, titleRight, linkLeft, linkRight} = this.props;
        return (
            <Navbar.Collapse className="nav-bar-side">
                <NavbarInfo side={this.props.side} cartItems={this.props.cartItems}/>
                <NavbarLinks titleLeft={titleLeft}
                             linkLeft={linkLeft}
                             titleRight={titleRight}
                             linkRight={linkRight}
                             />
            </Navbar.Collapse>

        );
    }
}

export default NavbarSide;