import React, {Component} from 'react';
import Menu from './Menu.js'

class MenuToggles extends Component {
    state = {
        value: 'Шаверма'
    }

    onClick = e => {
        this.setState({value: e.currentTarget.dataset.id})
        let buttons = document.querySelectorAll("button");
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                buttons.forEach(btn => btn.classList.remove('active'))
                this.classList.add('active')
            })
        })
    }


    render() {
        const {value} = this.state
        return (
            <>
                <div className="toggles" id="btn-toggles">
                    <button type="button" className="btn-toggle active" onClick={this.onClick}
                            data-id="Шаверма">Шаверма
                    </button>
                    <button type="button" className="btn-toggle" onClick={this.onClick} data-id="Хот-дог">Хот-доги
                    </button>
                    <button type="button" className="btn-toggle" onClick={this.onClick} data-id="Бургер">Бургери
                    </button>
                    <button type="button" className="btn-toggle" onClick={this.onClick} data-id="Напій">Напої
                    </button>
                </div>
                <Menu cartItems={this.props.cartItems} addToCart={this.props.addToCart} plus={this.props.plus}
                      category={value}/>
            </>
        );
    }
}

export default MenuToggles;