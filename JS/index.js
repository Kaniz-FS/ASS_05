console.log("hello");

// counting heart
const hearts = document.querySelectorAll(".fa-heart");

let count = getInnerTextById("count-heart");

for (const heart of hearts) {
  heart.addEventListener("click", function () {
    count++;

    setInnerTextByIDandValue("count-heart", count);
  });
}
// calling with coin part
document.getElementById("emergency-btn").addEventListener("click", function () {
  const coins = getInnerTextById("coin-id");
  //   console.log(coins);

  const newCoin = coins - 20;

  if (newCoin < 0) {
    alert(
      "You do not have sufficient coin. You need atleast 20 coins for calling"
    );
  } else {
    setInnerTextByIDandValue("coin-id", newCoin);
    alert("Calling National Emergency Services 999..");
  }
});
document.getElementById("police-btn").addEventListener("click", function () {
  const coins = getInnerTextById("coin-id");
  //   console.log(coins);

  const newCoin = coins - 20;

  if (newCoin < 0) {
    alert(
      "You do not have sufficient coin. You need atleast 20 coins for calling"
    );
  } else {
    setInnerTextByIDandValue("coin-id", newCoin);
    alert("Calling Police Services 999..");
  }
});
document.getElementById("fire-btn").addEventListener("click", function () {
  const coins = getInnerTextById("coin-id");
  //   console.log(coins);

  const newCoin = coins - 20;

  if (newCoin < 0) {
    alert(
      "You do not have sufficient coin. You need atleast 20 coins for calling"
    );
  } else {
    setInnerTextByIDandValue("coin-id", newCoin);
    alert("calling Fire Services 999..");
  }
});
document.getElementById("health-btn").addEventListener("click", function () {
  const coins = getInnerTextById("coin-id");
  //   console.log(coins);

  const newCoin = coins - 20;

  if (newCoin < 0) {
    alert(
      "You do not have sufficient coin. You need atleast 20 coins for calling"
    );
  } else {
    setInnerTextByIDandValue("coin-id", newCoin);
    alert("Calling Ambulance Service 1994-999999..");
  }
});
document.getElementById("help-btn").addEventListener("click", function () {
  const coins = getInnerTextById("coin-id");
  //   console.log(coins);

  const newCoin = coins - 20;

  if (newCoin < 0) {
    alert(
      "You do not have sufficient coin. You need atleast 20 coins for calling"
    );
  } else {
    setInnerTextByIDandValue("coin-id", newCoin);
    alert("Calling Women & Child Helpline 109..");
  }
});
document.getElementById("anti-btn").addEventListener("click", function () {
  const coins = getInnerTextById("coin-id");
  //   console.log(coins);

  const newCoin = coins - 20;

  if (newCoin < 0) {
    alert(
      "You do not have sufficient coin. You need atleast 20 coins for calling"
    );
  } else {
    setInnerTextByIDandValue("coin-id", newCoin);
    alert("Calling Anti-Corruption Services 999..");
  }
});
