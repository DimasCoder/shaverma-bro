import React, {Component} from 'react';
import "../../App.css";
import {Navbar} from 'react-bootstrap';
import NavbarSide from "./NavbarSide";
import NavbarCenter from "./NavbarCenter";

export default class Header extends Component {



    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" className="nav-bar">
                    <NavbarSide titleLeft={"Головна"}
                                    linkLeft={"/"}
                                    titleRight={"Доставка"}
                                    linkRight={"/delivery"}
                                    side={"left"}
                        />
                        <NavbarCenter cartItems={this.props.cartItems}/>
                    <NavbarSide titleLeft={"Відгуки"}
                                        linkLeft={"/reviews"}
                                        titleRight={"Про нас"}
                                        linkRight={"/faq"}
                                        side={"right"}
                                        cartItems={this.props.cartItems}
                            />
                </Navbar>

            </>
        )
    }
}
