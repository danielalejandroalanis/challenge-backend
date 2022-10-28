// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const app = express();
// const Router = require("./core/routes/routes");
// app.use(cors({ origin: "*" }));
// app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.json({ message: "Steplix Challenge | Currencies rates." });
// });

// app.use(Router);
// const db = require("./core/config/db.config");
// try {
//   db.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }


// const PORT = process.env.NODE_PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server running at ${PORT}`);
// });
'use strict';

module.exports = require('./core');
