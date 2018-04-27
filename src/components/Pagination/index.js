import React from "react";
import * as styles from "./styles";

const Pagination = ({ currentPage, limit, total, onPageSelect }) => {
  if (!currentPage || !limit || !total) {
    return null;
  }

  const pages = Math.ceil(total / limit);
  const buttons = [...Array(pages).keys()].map(page => page + 1);

  return (
    <styles.Pagination>
      {buttons.map(button => (
        <styles.Button
          key={button}
          current={currentPage === button}
          disabled={currentPage === button}
          onClick={() => onPageSelect(button)}
        >
          {button}
        </styles.Button>
      ))}
    </styles.Pagination>
  );
};

export default Pagination;
