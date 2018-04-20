"use strict";

exports.up = function(r, connection) {
  return Promise.all([
    r
      .tableCreate("products")
      .run(connection)
      .catch(error => {
        console.log(error);
        throw error;
      }),
    r
      .tableCreate("sessions")
      .run(connection)
      .catch(error => {
        console.log(error);
        throw error;
      }),
    r
      .tableCreate("users")
      .run(connection)
      .catch(error => {
        console.log(error);
        throw error;
      }),
  ]);
};

exports.down = function(r, connection) {
  return Promise.all([
    r
      .tableDrop("products")
      .run(connection)
      .catch(error => {
        console.log(error);
        throw error;
      }),
    r
      .tableDrop("sessions")
      .run(connection)
      .catch(error => {
        console.log(error);
        throw error;
      }),
    r
      .tableDrop("users")
      .run(connection)
      .catch(error => {
        console.log(error);
        throw error;
      }),
  ]);
};
