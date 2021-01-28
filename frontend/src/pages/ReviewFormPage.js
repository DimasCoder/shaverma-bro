import React, {Component} from 'react';
import ReviewForm from "../components/reviews/ReviewForm";
import PageTitle from "../components/PageTitle";
import MetaTags from "react-meta-tags";

class ReviewFormPage extends Component {
    componentDidMount() {
        document.title = 'Залишити відгук'
    }

    render() {
        return (
            <>
                <MetaTags>
                    <title>Шаверма Бро - залишити відгук</title>
                    <meta id="meta-description" name="description" content="Залиште відгук про наш заклад. Відгуки залишають лише реальні клієнти і лише після виконаного замовлення. Окрім
                            спама/реклами ніякі відгуки не редагуються і не видаляються." />
                    <meta id="og-title" property="og:title" content="Шаверма Бро | Залиште відгук про Шаверму Бро | Shaverma BRO" />
                </MetaTags>
                <PageTitle title={"Залишити відгук"} />
                <ReviewForm/>
            </>
        );
    }
}
export default ReviewFormPage;