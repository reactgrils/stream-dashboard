const express = require("express");
const { join } = require("path");
const history = require("connect-history-api-fallback");

const Port = process.env.PORT || 3000;
const app = express();

app.use(history());
app.use(express.static(join(__dirname, "dist")));

app.listen(Port, () => console.log("start server"));
