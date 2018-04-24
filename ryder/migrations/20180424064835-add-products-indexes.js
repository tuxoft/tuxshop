"use strict";

exports.up = function(r, connection) {
  return Promise.all([
    r
      .table("products")
      .indexCreate("author", r.row("author"))
      .run(connection)
      .catch(error => {
        console.log(error);
        throw error;
      }),
    r
      .table("products")
      .indexCreate("title", r.row("title"))
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
      .table("products")
      .indexDrop("author")
      .run(connection)
      .catch(error => {
        console.log(error);
        throw error;
      }),
    r
      .table("products")
      .indexDrop("title")
      .run(connection)
      .catch(error => {
        console.log(error);
        throw error;
      }),
  ]);
};
