import React from "react";
import * as styles from "./styles";

const Book = ({ book }) => (
  <styles.Book>
    <styles.Cover />
    <styles.Title>{book.title}</styles.Title>
    <styles.Author>{book.author}</styles.Author>
    <styles.Price>{book.price}</styles.Price>
  </styles.Book>
);

export default Book;
