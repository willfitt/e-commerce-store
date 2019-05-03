import React from 'react'
import axios from 'axios'
import store from '../store';

class APIData extends React.Component {
  state = {
    productData: [],
    isLoading: true,
    errors: null
  };

  componentDidMount() {
    axios
      .get("https://my-json-server.typicode.com/tdmichaelis/typicode/products")
      .then(response =>
        response.data.map(product => ({
          id: `${product.id}`,
          productName: `${product.title}`,
          description: `${product.description}`,
          image: `${product.img}`,
          price: `${product.price}`,
          rating: `${product.rating}`,
          category: `${product.category}`
        }))
      )
      .then(productData => {
        store.dispatch({
          type: 'ADD_ITEMS',
          
          productData,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }


  render() {
    const { isLoading, productData } = this.state;
    return (
      <React.Fragment>
        <div>
          <div className="ui three cards">
            {!isLoading ? (
              productData.map(product => {
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
            ) : (
                <p>Is Loading...</p>
              )}
          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default APIData