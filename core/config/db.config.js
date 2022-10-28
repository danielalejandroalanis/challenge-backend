const {database} = require("steplix-microservice");

const dbData = require('./db.data');
const db = database(dbData.DB, dbData.USER, dbData.PASSWORD, {
  host: dbData.HOST,
  dialect: dbData.dialect,
});


module.exports = db;
