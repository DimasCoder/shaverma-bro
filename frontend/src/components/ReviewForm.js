import React, {Component} from 'react';
import axios from "axios";

class ReviewForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            secondName: '',
            text: '',
            stars: 1
        }
        this.inputChange = this.inputChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    }

    postReview = () => {
        axios.post("api/post", {
            firstName: this.state.firstName,
            secondName: this.state.secondName,
            text: this.state.text,
            stars: this.state.stars,
        })
    }

    inputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleCheckboxChange = event =>{
        this.setState({ stars: event.target.value})
        let radio = document.querySelectorAll("radio");
        radio.forEach(star => {

        })
    }



    render() {
        const {firstName, secondName, text, stars} = this.state;
        console.log(stars)
        return (
            <>
                <div className="review-form-container">
                    <div className="review-form-border">
                        <div className="review-form-input-container">
                            <div>
                                <p>Ім'я</p>
                                <input className="review-form-input" required={true} type="input" value={firstName}
                                       name="firstName"
                                       onChange={this.inputChange} placeholder="Ваше ім'я"/>
                            </div>
                            <div>
                                <p>Прізвище</p>
                                <input className="review-form-input" required={true} type="input" value={secondName}
                                       name="secondName"
                                       onChange={this.inputChange} placeholder="Ваше прізвище"/>
                            </div>
                        </div>
                        <div className="review-form-text">
                        <p>Текст</p>
                        <textarea className="review-form-input" required={true} value={text} name="text"
                               onChange={this.inputChange} placeholder="Відгук..."/>
                        </div>
                        <div style={{display: "flex"}}>
                        <div className="star-rating">
                            <label>
                                <input className="checkbox-input" type="radio" name="stars" value={1} onChange={this.handleCheckboxChange} checked={stars == 1}/>
                                <svg className="checkbox-image" viewBox="0 0 16 16" width="16" height="16" data-svg="star-sm">
                                    <path d="M 8 1 L 5.972656 5.804688 L 1 6.347656 L 4.71875 9.859375 L 3.671875 15 L 8 12.363281 L 12.328125 15 L 11.28125 9.859375 L 15 6.347656 L 10.027344 5.804688 Z"></path>
                                </svg>
                            </label>
                            <label>
                                <input className="checkbox-input" type="radio" name="stars" value={2} checked={stars == 2} onChange={this.handleCheckboxChange}/>
                                <svg className="checkbox-image" viewBox="0 0 16 16" width="16" height="16" data-svg="star-sm">
                                    <path d="M 8 1 L 5.972656 5.804688 L 1 6.347656 L 4.71875 9.859375 L 3.671875 15 L 8 12.363281 L 12.328125 15 L 11.28125 9.859375 L 15 6.347656 L 10.027344 5.804688 Z"></path>
                                </svg>
                            </label>
                            <label>
                                <input className="checkbox-input" type="radio" name="stars" value={3} checked={stars == 3} onChange={this.handleCheckboxChange}/>
                                <svg className="checkbox-image" viewBox="0 0 16 16" width="16" height="16" data-svg="star-sm">
                                    <path d="M 8 1 L 5.972656 5.804688 L 1 6.347656 L 4.71875 9.859375 L 3.671875 15 L 8 12.363281 L 12.328125 15 L 11.28125 9.859375 L 15 6.347656 L 10.027344 5.804688 Z"></path>
                                </svg>
                            </label>
                            <label>
                                <input className="checkbox-input" type="radio" name="stars" value={4} checked={stars == 4} onChange={this.handleCheckboxChange}/>
                                <svg className="checkbox-image" viewBox="0 0 16 16" width="16" height="16" data-svg="star-sm">
                                    <path d="M 8 1 L 5.972656 5.804688 L 1 6.347656 L 4.71875 9.859375 L 3.671875 15 L 8 12.363281 L 12.328125 15 L 11.28125 9.859375 L 15 6.347656 L 10.027344 5.804688 Z"></path>
                                </svg>
                            </label>
                            <label>
                                <input className="checkbox-input" type="radio" name="stars" value={5} checked={stars == 5} onChange={this.handleCheckboxChange}/>
                                <svg className="checkbox-image" viewBox="0 0 16 16" width="16" height="16" data-svg="star-sm">
                                    <path d="M 8 1 L 5.972656 5.804688 L 1 6.347656 L 4.71875 9.859375 L 3.671875 15 L 8 12.363281 L 12.328125 15 L 11.28125 9.859375 L 15 6.347656 L 10.027344 5.804688 Z"></path>
                                </svg>
                            </label>
                        </div>
                        <div>
                            <p>Оцінка <span>{stars}.0</span> з 5.0!</p>
                        </div>
                        </div>

                        <div className="order-row">
                            <button type="submit" className="review-btn-send" onClick={this.postReview}><a
                                href="/">Надіслати відгук</a></button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ReviewForm;