import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import '../App.css'

// Components
import ProductPage from './ProductPage'
import Cart from './Cart'
import Login from './Login'
import ProductDetails from './ProductDetails';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="ui menu">
          <Link className="item" to="/">
            <i className="fas fa-home"></i>
          </Link>
          <Link className="item" to="/ProductPage">
            Products
          </Link>
          <Link className="item" to="/ProductDetails">
            ProductDetails
          </Link>
          <Link className="item right" to="/Cart">
            <i className="fas fa-shopping-cart"></i>
          </Link>
        </div>

        <Switch>
          <Route exact path="/" render={() => (
            <div>
              <Login />
            </div>
          )} />
          <Route path="/ProductPage" component={ProductPage} />
          <Route path="/Cart" component={Cart} />
          <Route path="/ProductDetails" component={ProductDetails} />

          <Route render={() => (
            <div> 404 Not found </div>
          )} />
        </Switch>
        <div>
          <footer className="ui two item menu">
            <div className="item">Questions? Email products@thiswebsite.com</div>
            <div className="item"><div>Like us? Follow us on twitter!</div><i className="fab fa-twitter"></i>
</div>
          </footer>
        </div>

      </Router>
    )
  }
}

export default App;
