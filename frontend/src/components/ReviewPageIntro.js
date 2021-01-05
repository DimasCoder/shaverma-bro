import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faShoppingBasket} from "@fortawesome/free-solid-svg-icons";

export default class ReviewPageIntro extends Component {

    render() {
        return (
            <div className="review-intro-container">
                <span></span>
                <h2>Відгуки</h2>
                <NavLink to exact="/post" className="review-btn-post">Написати відгук <FontAwesomeIcon
                    icon={faComment}/></NavLink>

            </div>
        )
    }
}
