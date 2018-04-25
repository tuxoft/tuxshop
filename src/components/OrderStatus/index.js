import React from "react";

const OrderStatus = ({ order }) => {
  if (!order) {
    return null;
  }

  let status;

  switch (order.status) {
    case "paid": {
      status = "Paid";
      break;
    }
    case "failed_to_pay": {
      status = "Failed to pay";
      break;
    }
    default: {
      status = "";
    }
  }

  return <span>{status}</span>;
};

export default OrderStatus;
