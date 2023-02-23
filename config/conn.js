const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "password",
    database: "np_node_mysql",
    ssl: {
      rejectUnauthorized: false,
    },
    debug: false,
  },
});

module.exports = { knex };
