import React from "react";
import * as styles from "./styles";

const SearchProduct = ({ product, cart }) => {
  if (!product || !cart) {
    return null;
  }

  return (
    <styles.SearchProduct>
      <styles.Header>
        <styles.Cover />

        <styles.Information>
          <styles.Title>{product.title}</styles.Title>
          <styles.Author>{product.author}</styles.Author>
          <styles.Price>${product.price}</styles.Price>
        </styles.Information>
      </styles.Header>

      <styles.Controls>
        {!cart.inCart(product) && (
          <styles.Control onClick={() => cart.addToCart(product)}>
            Add to cart
          </styles.Control>
        )}

        {cart.inCart(product) && (
          <styles.Control onClick={() => cart.removeFromCart(product)}>
            Remove from cart
          </styles.Control>
        )}
      </styles.Controls>
    </styles.SearchProduct>
  );
};

export default SearchProduct;
