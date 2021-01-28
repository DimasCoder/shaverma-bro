import React, {Component} from 'react';
import ReviewForm from "../components/reviews/ReviewForm";
import PageTitle from "../components/PageTitle";

class ReviewFormPage extends Component {
    componentDidMount() {
        document.title = 'Залишити відгук'
    }

    render() {
        return (
            <>
                <PageTitle title={"Залишити відгук"} />
                <ReviewForm/>
            </>
        );
    }
}
export default ReviewFormPage;