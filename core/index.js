"use strict";

require("steplix-microservice/helpers/dependencies");
const database = require("steplix-microservice/database");
const { app, listen } = require("steplix-microservice/server");
const { errors, health } = require("steplix-microservice/server/routes");
const getCurrency = require("./controllers/getCurrency");
const createRate = require("./controllers/createRate");
const getRates = require("./controllers/getRates");
const getRateBySymbol = require("./controllers/getRateBySymbol");
const rootDir = process.cwd();

// Routes
app.get("/", (req, res) => res.json("Steplix Currency Challenge"));
app.get("/currencies", getCurrency);
app.post("/rates", createRate);
app.get("/rates", getRates);
app.get("/rates/:symbol", getRateBySymbol);

health(app, { rootDir, database });
errors(app);
database.connection;
// Start server
listen(app);

module.exports = app;
