let socket = io();
$(document).ready(function () {
  socket.on("price-btc", (price) => {
    $("#price-btc").text(price);
  });
  $("#btnBuy").click(function () {
    $.post(
      "/buy",
      {
        amount: $("#numCoin").val(),
      },
      function (data) {
        console.log(data);
      }
    );
  });
  $("#btnSell").click(function () {
    $.post(
      "/sell",
      {
        amount: $("#numCoin").val(),
      },
      function (data) {
        console.log(data);
      }
    );
  });
});
