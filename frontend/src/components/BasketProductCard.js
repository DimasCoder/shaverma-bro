import React, {Component} from 'react';

class BasketProductCard extends Component {

    state = {
        products: [],
        count: this.props.item.countOfOneProduct,
    }


    render() {
        const {count} = this.state
        const {item} = this.props
        const {cartItems} = this.props

        return (
            <>
                <div className="basket-product-card">
                    <div className="basket-product-image">
                        <img
                            src={item.image}
                        />
                    </div>
                    <div className="basket-product-name">
                        <p>{item.category} <span>{item.price == item.priceMini ? item.foodName + " \n Mini" :
                            item.price == item.priceMiddle ? item.foodName + ' \n Middle' :
                                item.price == item.priceMaxi ? item.foodName + " \n Maxi" : <div></div>}</span></p>
                    </div>
                    <div className="basket-product-price">
                        <p>{item.price * item.countOfOneProduct}₴</p>
                    </div>
                    <div className="basket-product-buttons">
                        <button type="button" onClick={() => this.props.minus(item, count)} className="btn-minus">-
                        </button>
                        <input type="text" value={item.countOfOneProduct} className="btn-number"/>
                        <button type="button" onClick={() => this.props.plus(item, count)} className="btn-plus">+
                        </button>
                    </div>
                    <div className="basket-product-remove">
                        <input type="button" value="X" onClick={() => this.props.removeFromCart(item)}
                               className="btn-cancel"/>
                    </div>
                </div>
            </>
        );
    }
}

export default BasketProductCard;