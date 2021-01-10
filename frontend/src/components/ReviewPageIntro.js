import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import PageTitle from "./PageTitle";
import RedButton from "./RedButton";


export default class ReviewPageIntro extends Component {

    render() {
        return (
            <>
                <div className="review-intro-container">
                    <span></span>
                    <PageTitle title={"Відгуки"}/>
                    <RedButton link={"/post"} text={"Написати відгук"} icon={faComment} />
                </div>
            </>
        )
    }
}
