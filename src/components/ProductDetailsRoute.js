import React from 'react'
import { Route } from 'react-router-dom'

const ProductDetailsRoute = () => (
  <Route render={({ history}) => (
    <button
      type='button'
      className="ui fluid button"
      onClick={() => { history.push('/ProductDetails') }}
    >
      See Details
    </button>
  )} />
)

export default ProductDetailsRoute