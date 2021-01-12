import React, {Component} from 'react';

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        const type = this.props.type;
        return (
            <>
                {type === "input" ?
                    <div>
                        <p>{this.props.title}</p>
                        <input className="review-form-input" required={true} type="input" value={this.inputValue}
                               name={this.name}
                               onChange={this.inputChange} placeholder={this.placeholder}/>
                    </div>
                    :
                        <div>
                            <p>{this.props.title}</p>
                            <textarea className="review-form-input" required={true} value={this.props.inputValue}
                                      name={this.props.name}
                                      onChange={this.inputChange} placeholder={this.props.placeholder}/>
                        </div>
                };
            </>
        );
    }
}

export default Input;