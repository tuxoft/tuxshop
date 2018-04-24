import React from "react";
import { CartContext } from "../../lib/Cart";
import * as styles from "./styles";

const CartConsumer = CartContext.Consumer;

const Book = ({ book }) => (
  <CartConsumer>
    {({ cart, addToCart, removeFromCart, inCart }) => (
      <styles.Book>
        <styles.Cover />
        <styles.Title>{book.title}</styles.Title>
        <styles.Author>{book.author}</styles.Author>
        <styles.Price>${book.price}</styles.Price>

        {!inCart(book) && (
          <styles.AddToCart onClick={() => addToCart(book)}>
            Add to cart
          </styles.AddToCart>
        )}

        {inCart(book) && (
          <styles.RemoveFromCart onClick={() => removeFromCart(book)}>
            Remove from cart
          </styles.RemoveFromCart>
        )}
      </styles.Book>
    )}
  </CartConsumer>
);

export default Book;
