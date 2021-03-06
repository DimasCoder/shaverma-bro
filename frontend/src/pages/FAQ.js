import React, {Component} from 'react';
import PageTitle from "../components/PageTitle";
import MetaTags from "react-meta-tags";

class Faq extends Component {
    componentDidMount() {
        document.title = 'Про нас'
    }
    render() {
        return (
            <>
                <MetaTags>
                    <title>Шаверма Бро - про нас та наш заклад</title>
                    <meta id="meta-description" name="description" content="Shaverma Bro - це мережа закладів швидкого харчування в місті Рівне, що працює ради вашого задоволення." />
                    <meta id="og-title" property="og:title" content="Шаверма Бро | Про Шаверму Бро | Shaverma BRO." />
                </MetaTags>
                <PageTitle title={"Про нас"}/>
            </>
        );
    }
}

export default Faq;