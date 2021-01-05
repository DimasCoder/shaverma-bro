import React, {Component} from 'react';
import "../App.css";
import LStar from "./LightStar";
import DStar from "./DarkStar";

export default class ReviewCard extends Component {

    render() {

        return (
            <>
                <div className="review-card" key={this.props.post.index}>
                    <div className="review-card-body">
                        <div className="review-avatar">
                            <div className="review-rounded-bg">
                                <p>{this.props.post.firstName && this.props.post.firstName.charAt(0)}{this.props.post.secondName && this.props.post.secondName.charAt(0)}</p>
                            </div>

                        </div>
                        <div className="review-author-name">
                            <p>{this.props.post.firstName} {this.props.post.secondName.charAt(0)}</p>
                            <div className="date">
                                <p>{this.props.post.date}</p>
                            </div>
                        </div>
                        <div className="review-stars">
                            {this.props.post.stars === 1
                                ? <div><LStar/><DStar/><DStar/><DStar/><DStar/></div>
                                : this.props.post.stars === 2
                                    ? <div><LStar/><LStar/><DStar/><DStar/><DStar/></div>
                                    : this.props.post.stars === 3
                                        ? <div><LStar/><LStar/><LStar/><DStar/><DStar/></div>
                                        : this.props.post.stars === 4
                                            ? <div><LStar/><LStar/><LStar/><LStar/><DStar/></div>
                                            : this.props.post.stars === 5
                                                ? <div><LStar/><LStar/><LStar/><LStar/><LStar/></div>
                                                : <div><DStar/><DStar/><DStar/><DStar/><DStar/></div>}
                        </div>
                    </div>
                    <div className="review-card-footer">
                        <p className="review-text">{this.props.post.text}</p>
                    </div>
                </div>
            </>
        )
    }
}
