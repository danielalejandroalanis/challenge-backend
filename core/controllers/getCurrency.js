const {Currencies} = require("../models/currenciesRates.model");


//Get all currencies
const Route = require('steplix-microservice/server/routes/list');

module.exports = (new Route("Currencies", {Currencies})).handlerize();
