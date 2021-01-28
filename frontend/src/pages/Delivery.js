import React, {Component} from 'react';
import PageTitle from "../components/PageTitle";
import MetaTags from "react-meta-tags";

class Delivery extends Component {
    componentDidMount() {
        document.title = 'Доставка'
    }
    render() {
        return (
            <>
                <MetaTags>
                    <title>Shaverma Bro - доставка по місту Рівне</title>
                    <meta id="meta-description" name="description" content="Доставка на Shaverma Bro. Замовити доставку від Shaverma Bro. Доставка здійснюється по всьому місту Рівне." />
                    <meta id="og-title" property="og:title" content="Shaverma Bro доставка." />
                </MetaTags>
                <PageTitle title={"Доставка"}/>
            </>
        );
    }
}

export default Delivery;