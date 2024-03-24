//database connection - connects to MSSQL server and LOTSSQL database

"use strict";
const { Sequelize } = require("sequelize");

//connect to MSSQL
const sequelize = new Sequelize(
  process.env.DB_Database,
  process.env.DB_USER,
  process.env.DB_PASS,
  { host: process.env.DB_HOST, dialect: "mssql" }
);

const connectMSSql = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      `Connection has been established successfully. Database ${process.env.DB_Database}`
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
};

connectMSSql();

module.exports = {
  Sequelize: sequelize,
  connectMSSql,
};
