let express = require("express");
const { urlencoded } = require("express");
let app = express();
const Binance = require("node-binance-api");
require("dotenv").config();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(urlencoded({ extended: false }));
let server = require("http").Server(app);
let io = require("socket.io")(server);
const binance = new Binance().options({
  APIKEY: process.env.API_PB,
  APISECRET: process.env.API_SK,
});
let config = {
  app: app,
  io: io,
  binance: binance,
};

io.on("connection", function (socket) {
  let id = socket.id;
  console.log("New connection: " + id);
});
server.listen(process.env.PORT, function (err) {
  if (err) console.error("Server error when start http");
  console.log("Server start at port: " + server.address().port);
});
require("./routes/index")(config);
