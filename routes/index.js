let botController = require("../controller/bot");
module.exports = async function (config) {
  let app = config.app;
  let binance = config.binance;
  let io = config.io;
  let currentPrice = 0;
  binance.futuresMiniTickerStream("BTCUSDT", function (data) {
    if (currentPrice !== data.close) {
      io.sockets.emit("price-btc", data.close);
    }
    currentPrice = data.close;
  });
  app.get("/", botController.home);
  app.post("/buy", botController.buy(binance));
  app.post("/sell", botController.sell(binance));
};
