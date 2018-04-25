import React from "react";
import OrderProducts from "../OrderProducts";
import ShippingInfo from "../ShippingInfo";
import OrderStatus from "../OrderStatus";
import * as styles from "./styles";

const OrderDetails = ({ order }) => (
  <styles.OrderDetails>
    <styles.Block>
      <styles.BlockName>Products</styles.BlockName>

      <styles.BlockContent>
        <OrderProducts order={order} />
      </styles.BlockContent>
    </styles.Block>

    <styles.Block>
      <styles.BlockName>Shipping</styles.BlockName>

      <styles.BlockContent>
        <ShippingInfo order={order} />
      </styles.BlockContent>
    </styles.Block>

    <styles.Block>
      <styles.BlockName>Status</styles.BlockName>

      <styles.BlockContent>
        <OrderStatus order={order} />
      </styles.BlockContent>
    </styles.Block>
  </styles.OrderDetails>
);

export default OrderDetails;
