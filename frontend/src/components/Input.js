import React, {Component} from 'react';

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.inputChange(e.target.value);
    }


    render() {
        const type = this.props.type;
        const title = this.props.title;
        const inputValue = this.props.inputValue;
        const inputName = this.props.inputName;
        const placeholder = this.props.placeholder;
        return (
            <>
                {type === "input" ?
                    <div>
                        <p>{title}</p>
                        <input className="review-form-input" required={true} type="input" value={inputValue}
                               name={inputName}
                               onChange={this.handleChange} placeholder={placeholder}/>
                    </div>
                    :
                    <div>
                        <p>{title}</p>
                        <textarea className="review-form-input" required={true} value={inputValue}
                                  name={inputName}
                                  onChange={this.handleChange} placeholder={placeholder}/>
                    </div>}
            </>);
    }
}

export default Input;