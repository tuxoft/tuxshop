import React from "react";
import * as List from "../../components/List";
import CartProduct from "../../components/CartProduct";
import * as styles from "./styles";

const OrderProducts = ({ order }) => {
  if (!order) {
    return null;
  }

  return (
    <styles.OrderProducts>
      {
          order.products.length > 0 && (
            <List.List>
              {
                order.products.map(product =>
                  <List.ListItem key={product.id}>
                    <CartProduct product={product} inCheckout />
                  </List.ListItem>
                )
              }
            </List.List>
          )
        }
    </styles.OrderProducts>
  );
};

export default OrderProducts;