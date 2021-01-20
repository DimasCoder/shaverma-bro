import React, {Component} from 'react';
import Intro from "../components/reviews/ReviewPageIntro";
import Reviews from "../components/reviews/ReviewsList";


export default class ReviewPage extends Component {
    render() {
        return (
            <>
                <Intro/>
                <Reviews/>
            </>
        )
    }
}
