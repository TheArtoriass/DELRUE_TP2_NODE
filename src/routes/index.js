const express = require("express");
const app = express();
const users = require("./users");
const watchlist = require("./watchlist")
const item = require("./item")

app.use(express.json())
app.use("/item", item);
app.use("/watchlist", watchlist);
app.use("/users", users);

module.exports = app;