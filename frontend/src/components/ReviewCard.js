import React, {Component} from 'react';
import "../App.css";
import LStar from "./LightStar";
import DStar from "./DarkStar";

export default class ReviewCard extends Component {
    state = {
        firstName: this.props.post.firstName,
        secondName: this.props.post.secondName,
        text: this.props.post.text,
        stars: this.props.post.stars,
        date: this.props.post.date,
        index: this.props.index
    }


    render() {
        const {firstName, secondName, text, stars, date, index} = this.state;


        return (
            <>
                <div className="review-card" key={index}>
                    <div className="review-card-body">
                        <div className="review-avatar">
                            <div className="review-rounded-bg">
                                <p>{firstName && firstName.charAt(0)}{secondName && secondName.charAt(0)}</p>
                            </div>

                        </div>
                        <div className="review-author-name">
                            <p>{firstName} {secondName.charAt(0)}</p>
                            <div className="date">
                                <p>{date}</p>
                            </div>
                        </div>
                        <div className="review-stars">
                            {stars === 1
                                ? <div><LStar/><DStar/><DStar/><DStar/><DStar/></div>
                                : stars === 2
                                    ? <div><LStar/><LStar/><DStar/><DStar/><DStar/></div>
                                    : stars === 3
                                        ? <div><LStar/><LStar/><LStar/><DStar/><DStar/></div>
                                        : stars === 4
                                            ? <div><LStar/><LStar/><LStar/><LStar/><DStar/></div>
                                            : stars === 5
                                                ? <div><LStar/><LStar/><LStar/><LStar/><LStar/></div>
                                                : <div><DStar/><DStar/><DStar/><DStar/><DStar/></div>}
                        </div>
                    </div>
                    <div className="review-card-footer">
                        <p className="review-text">{text}</p>
                    </div>
                </div>
            </>
        )
    }
}
