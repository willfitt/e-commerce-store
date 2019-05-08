import React from 'react'
import { Route } from 'react-router-dom'

const ProductDetailsRoute = (data) => (
  <Route render={({ history }) => (
    <button
      type='button'
      className="ui fluid button"
      onClick={() => { history.push({
        pathname: '/ProductDetails',
        state: data
      }) 
    }}
    >
      See Details
    </button>
  )} />
)

export default ProductDetailsRoute