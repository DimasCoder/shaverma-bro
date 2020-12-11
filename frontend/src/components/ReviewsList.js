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
            postsPerPage: 15
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
        const firstIndex = lastIndex - postsPerPage;
        const limit = posts.slice(firstIndex, lastIndex);
        const totalPages = count / postsPerPage;

        const pageNumCss = {
            width: "45px",
            border: "1px solid #17A2B8",
            color: "#17A2B8",
            textAlign: "center",
            fontWeight: "bold"
        };
        return (
            <>
                <div className="reviewList">
                    <Row className="cards-row">
                        {limit.reverse().map((post, index) => (
                            <ReviewCard post={post} index={index}/>
                        ))}
                    </Row>
                </div>
                <Row>
                    <div className="pagination">
                        <InputGroup size="sm">
                            <InputGroup.Prepend>
                                <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false}
                                        onClick={this.firstPage}>
                                    <FontAwesomeIcon icon={faFastBackward}/>
                                </Button>
                                <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false}
                                        onClick={this.prevPage}>
                                    <FontAwesomeIcon icon={faStepBackward}/> Пред
                                </Button>
                            </InputGroup.Prepend>
                            <FormControl style={pageNumCss} className={"bg-dark"} name="currentPage" value={currentPage}
                                         onChange={this.changePage}/>
                            <InputGroup.Append>
                                <Button type="button" variant="outline-info"
                                        disabled={currentPage === totalPages ? true : false}
                                        onClick={this.nextPage}>
                                    <FontAwesomeIcon icon={faStepForward}/> След
                                </Button>
                                <Button type="button" variant="outline-info"
                                        disabled={currentPage === totalPages ? true : false}
                                        onClick={this.lastPage}>
                                    <FontAwesomeIcon icon={faFastForward}/>
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                </Row>
            </>
        )
    }
}
