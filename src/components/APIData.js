import React from 'react'
import axios from 'axios' 
import store from '../store'
import { Link } from 'react-router-dom'

class APIData extends React.Component {

  componentDidMount() {
    store.subscribe(() => this.forceUpdate)
    axios
      .get("https://my-json-server.typicode.com/tdmichaelis/typicode/products")
      .then(response => {
        store.dispatch({
          type: 'CREATE_ITEMS',
          productItems: response.data.map(product => ({
            id: `${product.id}`,
            productName: `${product.title}`,
            description: `${product.description}`,
            image: `${product.img}`,
            price: `${product.price}`,
            rating: `${product.rating}`,
            category: `${product.category}`,
            quantity: 1
          }))
        })
        console.log("current store:", store.getState())
      }
      )
    store.subscribe(() => this.forceUpdate())
  }

  addToCart(cartItems) {
    store.dispatch({
      type: 'ADD_TO_CART',
      cartItems
    })
    console.log("current cart:", store.getState().cartItems)
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div className="ui four stackable cards productsContainer">
            {
              store.getState().products.map(product => {
                const { productName, id, image, rating, price } = product;
                return (
                  <div key={id} id={id} className="ui fluid card productListCard">
                    <div className="content">
                      <div className="right floated meta">{rating}</div>
                      <i className="right floated star icon"></i>
                      <div className="productPageCardTitle">{productName}</div>
                    </div>
                    <div className="ui image">
                      <Link to={'/ProductDetails/' + id}>
                        <img className="ui image listImage" src={image} alt={productName}></img>
                      </Link>
                    </div>
                    <div className="content">
                      <h4 className="priceStyle">${price}</h4>
                    </div>
                    <div className="content">
                      <div className="ui bottom attached button" onClick={() => this.addToCart(product)}>Add to Cart</div>
                    </div>
                  </div>
                );
              })
            }
          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default APIData