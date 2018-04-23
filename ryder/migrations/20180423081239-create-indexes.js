"use strict";

exports.up = function(r, connection) {
  return Promise.all([
    r
      .table("users")
      .indexCreate("email", r.row("email"))
      .run(connection)
      .catch(error => {
        console.log(error);
        throw error;
      }),
    r
      .table("orders")
      .indexCreate("email", r.row("email"))
      .run(connection)
      .catch(error => {
        console.log(error);
        throw error;
      }),
    r
      .table("orders")
      .indexCreate("paymentId", r.row("paymentId"))
      .run(connection)
      .catch(error => {
        console.log(error);
        throw error;
      })
  ]);
};

exports.down = function(r, connection) {
  return Promise.all([
    r
      .table("users")
      .indexDrop("email")
      .run(connection)
      .catch(error => {
        console.log(error);
        throw error;
      }),
    r
      .table("orders")
      .indexDrop("email")
      .run(connection)
      .catch(error => {
        console.log(error);
        throw error;
      }),
    r
      .table("orders")
      .indexDrop("paymentId")
      .run(connection)
      .catch(error => {
        console.log(error);
        throw error;
      })
  ]);
};
