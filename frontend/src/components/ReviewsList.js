import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFastBackward, faFastForward, faStepBackward, faStepForward} from '@fortawesome/free-solid-svg-icons';
import {Button, FormControl, InputGroup, Row} from 'react-bootstrap';
import "../App.css";
import axios from "axios";
import ReviewCard from "./ReviewCard"

export default class ReviewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            currentPage: 1,
            postsPerPage: 12
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

    changePage = event => {
        this.setState({
            [event.target.name]: parseInt(event.target.value)
        });
    };

    firstPage = () => {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: 1
            });
        }
    };

    prevPage = () => {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        }
    };

    lastPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.posts.length / this.state.postsPerPage)) {
            this.setState({
                currentPage: Math.ceil(this.state.posts.length / this.state.postsPerPage)
            });
        }
    };

    nextPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.posts.length / this.state.postsPerPage)) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    };

    render() {
        const {posts, currentPage, postsPerPage, count} = this.state;
        const lastIndex = count - (currentPage - 1) * postsPerPage;
        const firstIndex = (lastIndex < postsPerPage) ? 0 : lastIndex - postsPerPage;
        const currentPosts = posts.slice(firstIndex, lastIndex);
        const totalPages = Math.ceil(count / postsPerPage);
        console.log("last index: " + lastIndex + "firstIndex: " + firstIndex + "currentPosts: " + posts.slice(firstIndex, lastIndex));


        return (
            <>
                <div className="reviewList">
                    <Row className="cards-row">
                        {currentPosts.reverse().map((post) => (
                            <ReviewCard post={post} />
                        ))}
                    </Row>
                </div>
                    <div className="review-pagination">
                        <button type="button" className="review-btn first"
                                disabled={currentPage === 1}
                                onClick={this.firstPage}>
                            <FontAwesomeIcon  icon={faFastBackward}/>
                        </button>
                        <button type="button" className="review-btn prev"
                                disabled={currentPage === 1}
                                onClick={this.prevPage}>
                            <FontAwesomeIcon icon={faStepBackward}/> Попередня
                        </button>
                        <input type="text" className="btn-number" value={currentPage}
                               onChange={this.changePage}/>
                        <button type="button" className="review-btn next"
                                disabled={currentPage === totalPages}
                                onClick={this.nextPage}>
                            <FontAwesomeIcon icon={faStepForward}/> Наступна
                        </button>
                        <button type="button" className="review-btn last"
                                disabled={currentPage === totalPages}
                                onClick={this.lastPage}>
                            <FontAwesomeIcon icon={faFastForward}/>
                        </button>

                    </div>
            </>
        )
    }
}
