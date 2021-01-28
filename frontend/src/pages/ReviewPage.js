import React, {Component} from 'react';
import Intro from "../components/reviews/ReviewPageIntro";
import Reviews from "../components/reviews/ReviewsList";
import MetaTags from "react-meta-tags";


export default class ReviewPage extends Component {
    render() {
        return (
            <>
                <MetaTags>
                    <title>Шаверма Бро - ввідгуки наших клієнтів</title>
                    <meta id="meta-description" name="description" content="Відгуки залишають лише реальні клієнти і лише після виконаного замовлення. Окрім
                            спама/реклами ніякі відгуки не редагуються і не видаляються." />
                    <meta id="og-title" property="og:title" content="Шаверма Бро | Відгуки про Шаверму Бро | Shaverma BRO" />
                </MetaTags>
                <Intro/>
                <Reviews/>
            </>
        )
    }
}
