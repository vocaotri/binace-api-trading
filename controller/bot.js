exports.home = async (req, res) => {
  res.render("master");
};
exports.buy = function (binance) {
  return (req, res) => {
    let quantity = parseFloat(req.body.amount ?? 0);
    binance
      .marketBuy("BTCUSDT", quantity)
      .then((data) => {
        res.json({ data: data });
      })
      .catch((e) => {
        let codeErr = JSON.parse(e.body);
        res.json(codeErr);
      });
  };
};

exports.sell = function (binance) {
  return (req, res) => {
    let quantity = parseFloat(req.body.amount ?? 0);
    binance
      .marketSell("BTCUSDT", quantity)
      .then((data) => {
        res.json({ data: data });
      })
      .catch((e) => {
        let codeErr = JSON.parse(e.body);
        res.json(codeErr);
      });
  };
};
