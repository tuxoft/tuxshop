'use strict'

exports.up = function (r, connection) {
  return Promise.all([
    r
      .tableCreate("books")
      .run(connection)
      .catch(error => {
        console.log(error);
        throw error;
      }),
    r
      .tableCreate("souvenirs")
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
}

exports.down = function (r, connection) {
  return Promise.all([
    r
      .tableDrop("books")
      .run(connection)
      .catch(error => {
        console.log(error);
        throw error;
      }),
    r
      .tableDrop("souvenirs")
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
}
