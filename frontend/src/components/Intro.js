import React, {Component} from 'react';
import "../App.css";
import Carousel from "react-bootstrap/Carousel";

export default class Intro extends Component {
    render() {


        return (
            <>
                <div className="container-intro">
                    <div className="intro-text">
                        <h1><span>Shaverma BRO</span> Обери свою чорну насолоду!</h1>
                    </div>
                    <div className="intro-image">
                        <Carousel className="carousel">
                            <Carousel.Item interval={300}>
                                <img
                                    className="d-block w-100"
                                    src="https://ibb.co/9vQMxbt"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Shaverma Laksheri</h3>
                                    <p>Спробуйте нову шаверму Лакшері.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={300}>
                                <img
                                    className="d-block w-100"
                                    src="https://eda.ru/img/eda/c620x415i/s1.eda.ru/StaticContent/Photos/120131083215/170711121312/p_O.jpg"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Знижка 10%</h3>
                                    <p>На замовлення від 500 гривень ви отримуєте знижку 10% на наступну покупку.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={300}>
                                <img
                                    className="d-block w-100"
                                    src="https://img.freepik.com/free-photo/shawarma-rolled-lavash-moist-grilled-meat-with-onion-herbs-vegetables-wooden-black-background_124865-2562.jpg?size=626&ext=jpg"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </>
        )
    }
}
