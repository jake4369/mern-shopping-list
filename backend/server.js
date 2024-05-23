const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config();

const app = require("./app");

const DB = process.env.MONGODB_URI.replace("<PASSWORD>", process.env.PASSWORD);

mongoose
  .connect(DB)
  .then(() => console.log(colors.brightMagenta("DB successfully connected")))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(colors.brightCyan(`Server listening on port ${port}...`))
);
