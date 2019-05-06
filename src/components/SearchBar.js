import React from 'react'
import store from '../store';

class SearchBar extends React.Component {
    state = {
        value: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault()
    }

    handleChange = (event) => {
        store.dispatch({
            type: 'FILTER_ITEMS',
            value: event.target.value
        })
    }

    render() {
        return (
            <div className="topBar">
                <form onSubmit={this.onFormSubmit}>
                <input 
                    className="searchBar"
                    type="text" 
                    placeholder="Search products..."
                    value={this.state.value}
                    onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default SearchBar