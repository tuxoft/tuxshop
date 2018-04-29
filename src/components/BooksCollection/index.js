import React from "react";
import Book from "../Book";
import * as styles from "./styles";

const BooksCollection = ({ books, small }) => (
  <styles.BooksCollection>
    {!books && <styles.Empty>No books available.</styles.Empty>}

    {books &&
      books.length > 0 && (
        <styles.Grid>
          {books.map(book => (
            <styles.GridItem key={book.id}>
              <Book book={book} small={small} />
            </styles.GridItem>
          ))}
        </styles.Grid>
      )}
  </styles.BooksCollection>
);

export default BooksCollection;
