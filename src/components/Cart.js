import React from 'react'
import store from '../store'
import { Link } from 'react-router-dom'


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

    remove(cartItems, e) {
        e.preventDefault();
        store.dispatch({
            type: 'REMOVE_QUANTITY',
            cartItems
        })
        console.log(store.getState())
    }
    
    checkout(e) {
        e.preventDefault();
        alert("Your purchase is ready!")
    }
    render() {
        return (
            <div>
                <h1 className="cartHeader">Your Cart</h1>
                <div className="ui small items">
                    {store.getState().cartItems.map(product => {
                        const { productName, id, image, price } = product;
                        return(
                        <div key={id} id={id} className="item cartItem">
                            <div className="image">
                                <Link to={'/ProductDetails/'+id}>
                                  <img className="cartImage" src={image} alt={productName}></img>
                                </Link>
                            </div>
                            <div className="content">
                                <p className="header">{productName}</p>
                                <div className="extra">${price}</div>
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
                                        <button className="ui button" onClick={(e) => this.remove(this, e)}>
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
                    <button className="ui button right floated"  onClick={((e) => this.checkout(e))}>Proceed to Checkout</button>
                </div>
            </div>

        )
    }
}

export default Cart