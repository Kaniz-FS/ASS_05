console.log("hello");

document.getElementById("emergency-btn").addEventListener("click", function () {
  const coins = getInnerTextById("coin-id");
  //   console.log(coins);

  const newCoin = coins - 20;

  if (newCoin < 0) {
    alert("stop the process");
  } else {
    setInnerTextByIDandValue("coin-id", newCoin);
    alert("calling National Emergency Services 999..");
  }
});
