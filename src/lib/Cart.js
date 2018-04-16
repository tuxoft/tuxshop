import React, { Component } from 'react';

export const CartContext = React.createContext("cart");

export class CartProvider extends Component {
  addToCart = (product) => {
    this.setState({
      cart: {
        ...this.state.cart,
        products: [
          ...this.state.cart.products,
          product
        ],
        total: this.calculateTotal([
          ...this.state.cart.products,
          product
        ])
      }
    });
  };

  removeFromCart = (product) => {
    const productIdx = this.state.cart.products.findIndex(p => p.id === product.id);

    if (productIdx < 0) {
      return false;
    }

    this.setState({
      cart: {
        ...this.state.cart,
        products: [
          ...this.state.cart.products.slice(0, productIdx),
          ...this.state.cart.products.slice(productIdx + 1)
        ],
        total: this.calculateTotal([
          ...this.state.cart.products.slice(0, productIdx),
          ...this.state.cart.products.slice(productIdx + 1)
        ])
      }
    });
  };

  inCart = (product) => {
    const foundProduct = this.state.cart.products.find(p => p.id === product.id);

    return foundProduct ? true : false;
  };

  calculateTotal = (products) => {
    return products
      .reduce((acc, current) => acc + current.price, 0);
  };

  state = {
    cart: {
      products: []
    },
    addToCart: this.addToCart,
    removeFromCart: this.removeFromCart,
    inCart: this.inCart,
  };

  render() {
    return (
      <CartContext.Provider value={this.state}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}