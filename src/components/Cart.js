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
                    <div className="item cartItem">
                        <div className="image">
                            <img src="/images/wireframe/image.png"></img>
                        </div>
                        <div className="content">
                            <a className="header">productName</a>
                            <div className="extra">description</div>
                            <div className="description">
                                <span>Quantity</span>
                                <span></span>
                                <div className="ui  mini icon buttons">
                                    <button className="ui button">
                                        <i className="plus icon"></i>
                                    </button>
                                    <button className="ui button">
                                        <i className="minus icon"></i>
                                    </button>
                                    <button className="ui button">
                                        <i className="delete icon"></i>
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div>$TOTAL</div>
                <button>Proceed to Checkout</button>
            </div>

        )
    }
}

export default Cart