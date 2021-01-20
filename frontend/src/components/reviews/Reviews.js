import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight, faComment} from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom';
import ReviewPage from "../../pages/ReviewPage.js";
import ReviewCard from "./ReviewCard.js";
import axios from "axios";
import RedButton from "../RedButton";


export default class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            currentPage: 1,
            postsPerPage: 9
        };
    }

    componentDidMount() {
        this.findAllPosts();
    }

    findAllPosts() {
        axios.get("/api/post/all")
            .then(response => response.data)
            .then((data) => {
                this.setState({posts: data, count: data.length})
            });
    }

    render() {
        const {posts, count, postsPerPage} = this.state
        const lastIndex = count;
        const firstIndex = lastIndex - postsPerPage;
        const limit = posts.slice(firstIndex, lastIndex);
        return (
            <>
                <div className="mt-5 reviewList">
                    <div className="reviews-text">
                        <div className="reviews-btn">
                            <h4><span>{count}</span> РЕАЛЬНИХ ВІДГУКІВ</h4>
                            <RedButton link={"/reviews"} text={"Всі відгуки"} icon={faArrowRight} />
                        </div>
                        <div>
                        <p>Відгуки залишають лише реальні клієнти і лише після виконаного замовлення. Окрім
                            спама/реклами ніякі відгуки не редагуються і не видаляються.</p>
                        </div>
                    </div>
                    <div>
                        <Row className="cards-row">
                            {limit.reverse().map((post, index) => (
                                <ReviewCard post={post} index={index}/>
                            ))}
                        </Row>
                    </div>
                </div>

                <Router>
                    <Switch>
                        <Route exact path="/reviews" component={ReviewPage}/>
                    </Switch>
                </Router>
            </>
        )
    }
}
