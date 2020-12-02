import React, {Component} from 'react';
import Intro from "../components/ReviewPageIntro";
import Reviews from "../components/ReviewsList";


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
