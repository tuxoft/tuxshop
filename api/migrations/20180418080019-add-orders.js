'use strict'

exports.up = function (r, connection) {
  return Promise.all([
    r
      .tableCreate("orders")
      .run(connection)
      .catch(error => {
        console.log(error);
        throw error;
      }),
  ]);
}

exports.down = function (r, connection) {
  return Promise.all([
    r
      .tableDrop("orders")
      .run(connection)
      .catch(error => {
        console.log(error);
        throw error;
      }),
  ]);
}
