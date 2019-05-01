import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import '../App.css'

// Components
import ProductList from './ProductList'
import Cart from './Cart'
import Login from './Login'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="ui menu">
          <Link className="item" to="/">
            <i class="fas fa-home"></i>
          </Link>
          <Link className="item" to="/ProductList">
            Products
                  </Link>
          <Link className="item right" to="/Cart">
            <i class="fas fa-shopping-cart"></i>
          </Link>
        </div>

        <Switch>
          <Route exact path="/" render={() => (
            <div>
              <Login />
            </div>
          )} />
          <Route path="/ProductList" component={ProductList} />
          <Route path="/Cart" component={Cart} />

          <Route render={() => (
            <div> 404 Not found </div>
          )} />
        </Switch>
      </Router>
    )
  }
}

export default App;
