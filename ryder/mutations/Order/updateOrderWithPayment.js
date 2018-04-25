const { updateOrder, getOrderById } = require("../../models/order");
const kassa = require("../../kassa");

module.exports = (_, { id, order }) => {
  return updateOrder(id, {
    ...order,
    status: "pending"
  }).then(result => {
    return kassa
      .process(id, { idempotenceKey: result.idempotenceKey })
      .then(kassaResponse => {
        return updateOrder(id, {
          ...result,
          paymentId: kassaResponse.payment_id,
          confirmationUrl: kassaResponse.confirmation_url
        }).then(() => {
          return getOrderById(id).then(updatedOrder => {
            return updatedOrder;
          });
        });
      });
  });
};
