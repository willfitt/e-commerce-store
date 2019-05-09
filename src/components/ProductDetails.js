import React from 'react'
import store from '../store'

class ProductDetails extends React.Component {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate())
        
    }

    addToCart(cartItems, e) {
        e.preventDefault();
        store.dispatch({
            type: 'ADD_TO_CART',
            cartItems
        })
        console.log(store.getState())
    }

    render() {
        const product = store.getState().products.find((prod) => {
            return prod.id === this.props.match.params.id
        })
        return (
            <div>
                <div className="ui centered card">
                    <div className="image">
                        <img className="detailsImage" src={product.image} alt={product.productName}></img>
                    </div>
                    <div className="content">
                        <p className="header">{product.description}</p>
                    </div>
                    <div className="extra content">
                        <span className="right floated">
                            <button className="ui button" onClick={(e) => this.addToCart(product, e)}>Add to Cart</button>
                        </span>
                        <span className="priceStyle">
                            {product.price}
                    </span>
                    </div>
                </div>
            </div>
        )
    }

}


export default ProductDetails