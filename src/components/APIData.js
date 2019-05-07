import React from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import store from '../store'
import ProductDetails from './ProductDetails'
import ProductDetailsRoute from './ProductDetailsRoute';

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
            category: `${product.category}`
          }))
        })
        console.log(store.getState())
      }
      )
  }
  goToDetails() {
    
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div className="ui three cards">
            {!false ? (
              store.getState().products.map(product => {
                const { productName, id, image, rating, price } = product;
                return (
                  <div key={id} id={id} className="ui fluid card">
                    <div className="content">
                      <div className="right floated meta">{rating}</div>
                      <i className="right floated star icon"></i>
                      <div className="productPageCardTitle">{productName}</div>
                    </div>
                      <div className="ui image">
                        <img className="ui mini image" src={image} alt={productName}></img>
                        <ProductDetailsRoute></ProductDetailsRoute>
                      </div>
                    <div className="content">
                      <h4 className="priceStyle">${price}</h4>
                    </div>
                    <div className="content">
                      <div className="ui bottom attached button" onClick={this.addToCart}>Add to Cart</div>
                    </div>
                  </div>
                );
              })
            ) : (
                store.getState().products.map(product => {
                  const { productName, id, image, rating, price } = product;
                  return (
                    <div key={id} id={id} className="ui fluid card">
                      <div className="content">
                        <div className="right floated meta">{rating}</div>
                        <i className="right floated star icon"></i>
                        <div className="productPageCardTitle">{productName}</div>
                      </div>
                      <div className="ui image clickableCard">
                        <img className="ui mini image" src={image} alt={productName}></img>
                      </div>
                      <div className="content">
                        <h4 className="priceStyle">${price}</h4>
                      </div>
                      <div className="content">
                        <div className="ui bottom attached button">Add to Cart</div>
                      </div>
                    </div>
                  );
                })
              )}
          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default APIData