import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductList from "./components/productList/ProductList";
import { Provider } from "react-redux";
import store from "./store/store";
import FavoriteList from "./components/FavoriteList/FavoriteList";
import Header from "./components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <Header />
            <div className="content">
              <Route exact path="/" component={ProductList} />
              <Route path="/details/:id" component={ProductDetails} />
              <FavoriteList />
            </div>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
