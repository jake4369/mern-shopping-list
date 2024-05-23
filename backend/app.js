const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/productRoutes");

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/list", productRouter);

module.exports = app;
