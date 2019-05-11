import React from 'react'
import store from '../store';

class SearchBar extends React.Component {
    onFormSubmit = (event) => {
        event.preventDefault()
    }

    handleChange = (event) => {
        if (!event.target.value) {
            store.dispatch({
                type: 'RESET_FILTER'
            })
        } else {
            store.dispatch({
                type: 'FILTER_ITEMS',
                value: event.target.value
            })
        }
        store.subscribe(() => this.forceUpdate())
    }

    render() {
        return (
            <div className="topBar">
                <form onSubmit={this.onFormSubmit}>
                    <input
                        className="searchBar"
                        type="text"
                        placeholder="Search products..."
                        onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default SearchBar