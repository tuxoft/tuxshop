import React from "react";
import Product from "../Product";
import * as styles from "./styles";

const ProductsCollection = ({ products }) => (
  <styles.ProductsCollection>
    {!products && <styles.Empty>No products in storage.</styles.Empty>}

    {products &&
      products.length > 0 && (
        <styles.List>
          {products.map(product => (
            <styles.ListItem key={product.id}>
              <Product product={product} />
            </styles.ListItem>
          ))}
        </styles.List>
      )}

    <styles.NewProductLink to="/admin/storage/new">
      Add a product
    </styles.NewProductLink>
  </styles.ProductsCollection>
);

export default ProductsCollection;
