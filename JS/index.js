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

  if (coins < 20) {
    alert(
      "You do not have sufficient coin. You need atleast 20 coins for calling"
    );
    return;
  }

  setInnerTextByIDandValue("coin-id", coins - 20);
  alert("Calling National Emergency Services 999..");
  addToCallHistory("National Emergency", "999");
});

// Police
document.getElementById("police-btn").addEventListener("click", function () {
  const coins = getInnerTextById("coin-id");

  if (coins < 20) {
    alert(
      "You do not have sufficient coin. You need atleast 20 coins for calling"
    );
    return;
  }

  setInnerTextByIDandValue("coin-id", coins - 20);
  alert("Calling Police Services 999..");
  addToCallHistory("Police Helpline", "999");
});

// Fire
document.getElementById("fire-btn").addEventListener("click", function () {
  const coins = getInnerTextById("coin-id");

  if (coins < 20) {
    alert(
      "You do not have sufficient coin. You need atleast 20 coins for calling"
    );
    return;
  }

  setInnerTextByIDandValue("coin-id", coins - 20);
  alert("Calling Fire Services 999..");
  addToCallHistory("Fire Service", "999");
});

// Ambulance
document.getElementById("health-btn").addEventListener("click", function () {
  const coins = getInnerTextById("coin-id");

  if (coins < 20) {
    alert(
      "You do not have sufficient coin. You need atleast 20 coins for calling"
    );
    return;
  }

  setInnerTextByIDandValue("coin-id", coins - 20);
  alert("Calling Ambulance Service 1994-999999..");
  addToCallHistory("Ambulance Service", "1994-999999");
});

// Women & Child
document.getElementById("help-btn").addEventListener("click", function () {
  const coins = getInnerTextById("coin-id");

  if (coins < 20) {
    alert(
      "You do not have sufficient coin. You need atleast 20 coins for calling"
    );
    return;
  }

  setInnerTextByIDandValue("coin-id", coins - 20);
  alert("Calling Women & Child Helpline 109..");
  addToCallHistory("Women & Child Helpline", "109");
});

// Anti-Corruption
document.getElementById("anti-btn").addEventListener("click", function () {
  const coins = getInnerTextById("coin-id");

  if (coins < 20) {
    alert(
      "You do not have sufficient coin. You need atleast 20 coins for calling"
    );
    return;
  }

  setInnerTextByIDandValue("coin-id", coins - 20);
  alert("Calling Anti-Corruption Services 106..");
  addToCallHistory("Anti-Corruption Helpline", "106");
});

/*  history btn*/

document.getElementById("clear-history").addEventListener("click", function () {
  document.getElementById("call-history").innerHTML = "";
});

// call history
function addToCallHistory(name, number) {
  const history = document.getElementById("call-history");

  const div = document.createElement("div");
  div.className =
    "flex justify-between items-center bg-[#f4f7ff] p-3 rounded-lg";

  div.innerHTML = `
    <div>
      <h3 class="font-semibold text-md">${name}</h3>
      <p class="text-md text-gray-600">${number}</p>
    </div>
    <span class="text-md text-gray-600">
      ${new Date().toLocaleTimeString()}
    </span>
  `;

  history.appendChild(div);
}

/*  copy button */
const copyButtons = document.querySelectorAll(".copy-btn");

let copyCount = getInnerTextById("copy-count");

for (const btn of copyButtons) {
  btn.addEventListener("click", function () {
    const number =
      btn.parentElement.parentElement.querySelector(
        ".hotline-number"
      ).innerText;

    navigator.clipboard.writeText(number);

    copyCount++;
    setInnerTextByIDandValue("copy-count", copyCount);

    alert("Hotline number copied: " + number);
  });
}
