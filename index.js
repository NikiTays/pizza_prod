const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

let isOrder = false;
let isOrderd = false;

app.get("/", (req, res) => {
  isOrder = true;
  res.send(`success, isOrdered ${isOrderd}`);
});

app.get("/isOrderPizza", (req, res) => {
  res.send(isOrder);
});

app.get("/pizza_ordered", (req, res) => {
  isOrderd = true;
  res.send(isOrder);
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
