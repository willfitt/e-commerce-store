import React from 'react'

//component
import Product from './Product'
import Searchbar from './SearchBar'
import APIData from './APIData'

const Products = () => {
    return (
        <div>
            <Searchbar />
            <APIData />
        </div>
    )
}

export default Products