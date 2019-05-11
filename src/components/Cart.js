import React from 'react'
import store from '../store'
import { Link } from 'react-router-dom'

class Cart extends React.Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate())
    }

    increment(id) {
        store.dispatch({
            type: 'INCREASE_QUANTITY',
            id

        })
    }

    decrement(id) {
        store.dispatch({
            type: 'DECREASE_QUANTITY',
            id
        })
    }

    remove(id) {
        store.dispatch({
            type: 'REMOVE_ITEM',
            id
        })
        console.log(store.getState())
    }

    checkout() {
        alert("Your purchase is ready!")

    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h1 className="cartHeader">Your Cart</h1>
                    {true ? (
                        <div className="ui small items productsContainer">
                            {store.getState().cartItems.map(product => {
                                const { productName, id, image, price, quantity } = product;
                                return (
                                    <div key={id} id={id} className="item cartItem">
                                        <div className="image">
                                            <Link to={'/ProductDetails/' + id}>
                                                <img className="cartImage" src={image} alt={productName}></img>
                                            </Link>
                                        </div>
                                        <div className="content">
                                            <p className="header">{productName}</p>
                                            <div className="extra">${price}</div>
                                            <div className="description right floated">
                                                <span>Quantity</span>
                                                <span className="quantityBox">{quantity}</span>
                                                <div className="ui  mini icon buttons">
                                                    <button className="ui button" onClick={() => this.increment(product.id)}>
                                                        <i className="plus icon"></i>
                                                    </button>
                                                    <button className="ui button" onClick={() => this.decrement(product.id)}>
                                                        <i className="minus icon"></i>
                                                    </button>
                                                    <button className="ui button" onClick={() => this.remove(product.id)}>
                                                        <i className="delete icon"></i>
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            }
                            )}
                            <div className="card right floated">
                                <button className="ui button right floated" onClick={() => this.checkout()}>Proceed to Checkout</button>
                            </div>
                        </div>
                    ) : (
                            <div>
                                <h2 className="cartMessage">...is empty, keep shopping!</h2>
                            </div>
                        )}
                </div>
            </React.Fragment>
        )
    }
}

export default Cart