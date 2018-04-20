import React from "react";
import * as styles from "./styles";

const PaymentStatus = ({ order }) => {
  if (!order) {
    return null;
  }

  return (
    <styles.PaymentStatus>
      {
        order.status === "pending" && (
          <styles.Status>Processing payment...</styles.Status>
        )
      }

      {
        order.status === "paid" && (
          <styles.Status>Successfully purchased! Thank you for the order.</styles.Status>
        )
      }

      {
        order.status === "failed_to_pay" && (
          <styles.Status>Purchase failed. Please try again.</styles.Status>
        )
      }
    </styles.PaymentStatus>
  );
};

export default PaymentStatus;