import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import PageTitle from "./PageTitle";


export default class ReviewPageIntro extends Component {

    render() {
        return (
            <>
                <div className="review-intro-container">
                    <span></span>
                    <PageTitle title={"Відгуки"}/>
                    <Link exact to="/post" className="review-btn-post">Написати відгук <FontAwesomeIcon
                        icon={faComment}/></Link>
                </div>
            </>
        )
    }
}
