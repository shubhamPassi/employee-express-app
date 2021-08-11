const express = require("express");
const mainRouter = require("./routes/index");

const path = require("path");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(`public`)));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/employee", mainRouter);

app.listen(port, () => console.log(`listening on port ${port}`));
