const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const CONFIG = require("./config/config");
const errorHandler = require("./helpers/errorHandler");
const connectWithMongoDB = require("./config/db");
const apiV1 = require("./apiV1/index");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/v1", apiV1);

app.use(errorHandler.notFound);
app.use(errorHandler.internalServerError);

app.listen(CONFIG.PORT, () => {
	console.debug(`Server Started at ${CONFIG.PORT}`);
	connectWithMongoDB();
});
