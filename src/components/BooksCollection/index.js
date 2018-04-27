import React from "react";
import Book from "../Book";
import Pagination from "../Pagination";
import * as styles from "./styles";

const BooksCollection = ({ books, total, small, onPageSelect }) => (
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

    {books &&
      books.length > 0 && (
        <Pagination
          currentPage={1}
          limit={books.length}
          total={total}
          onPageSelect={onPageSelect}
        />
      )}
  </styles.BooksCollection>
);

export default BooksCollection;
