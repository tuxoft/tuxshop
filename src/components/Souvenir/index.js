import React from "react";
import * as styles from "./styles";

const Souvenir = ({ souvenir }) => (
  <styles.Souvenir>
    <styles.Cover />
    <styles.Title>{souvenir.title}</styles.Title>
    <styles.Manufacturer>{souvenir.manufacturer}</styles.Manufacturer>
    <styles.Price>${souvenir.price}</styles.Price>
    <styles.AddToCart>Add to cart</styles.AddToCart>
  </styles.Souvenir>
);

export default Souvenir;
