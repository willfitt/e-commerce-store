import React from 'react'
import store from '../store'

class Cart extends React.Component {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate())
    }

    increment() {
        store.dispatch({
            type: 'INCREASE_QUANTITY',

        })
    }

    decrement() {
        store.disptach({
            type: 'DECREASES_QUANTITY',

        })
    }

    remove() {
        store.dispatch({
            type: 'REMOVE_QUANTITY',

        })
    }
    //src={image} alt={productName} PUT IN IMAGE ONCE STORE IS CONNECTED
    render() {
        return (
            <div>
                <h1 className="cartHeader">Your Cart</h1>
                <div className="ui items">
                    {store.getState().cartItems.map(product => {
                        const { productName, id, image, rating, price } = product;
                        return(
                        <div className="item cartItem">
                            <div className="image">
                                <img src={image} alt={productName}></img>
                            </div>
                            <div className="content">
                                <p className="header">{productName}</p>
                                <div className="extra">Description</div>
                                <div className="description right floated">
                                    <span>Quantity</span>
                                    <span className="quantityBox">0</span>
                                    <div className="ui  mini icon buttons">
                                        <button className="ui button" onClick={this.increment}>
                                            <i className="plus icon"></i>
                                        </button>
                                        <button className="ui button" onClick={this.decrement}>
                                            <i className="minus icon"></i>
                                        </button>
                                        <button className="ui button" onClick={this.remove}>
                                            <i className="delete icon"></i>
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        )}
                    )}
                </div>
                <div className="card right floated">
                    <h4 className="cartTotal">$100.00</h4>
                    <button className="ui button right floated">Proceed to Checkout</button>
                </div>
            </div>

        )
    }
}

export default Cart