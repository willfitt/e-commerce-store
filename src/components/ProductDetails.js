import React from 'react'
import store from '../store'

class ProductDetails extends React.Component {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate())
    }

    addToCart() {
        store.dispatch({
            type: 'ADD_TO_CART',
        })
    }

    render() {
        return (
            <div>
                <div className="ui fluid card">
                    <div className="image">
                        <img src={image} alt={productName}></img>
                    </div>
                    <div className="content">
                        <a className="header">PRODUCT DESCRIPTION</a>
                    </div>
                    <div class="extra content">
                        <span class="right floated">
                            <button className="ui button" onclick="">Add to Cart</button>
                        </span>
                        <span className="priceStyle">
                            {price}
                    </span>
                    </div>
                </div>
            </div>
        )
    }

}

export default ProductDetails