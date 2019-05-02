import React from 'react'

class SearchBar extends React.Component {
    state = {
        value: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault()
    }

    handleChange = (event) => {
        this.setState({
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