import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class NavbarLinks extends Component {
    render() {
        return (
            <div className="nav-bar-links">
                <NavLink exact to={this.props.linkLeft} activeClassName="active"
                         className="header-nav-link"> {this.props.titleLeft}</NavLink>
                <NavLink exact to={this.props.linkRight} activeClassName="active"
                         className="header-nav-link">  {this.props.titleRight}</NavLink>
            </div>
        );
    }
}

export default NavbarLinks;