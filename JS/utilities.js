// text jodi kono html tag er moddhe thake sei text ke dhorar function
function getInnerTextById(id) {
  const value = document.getElementById(id).innerText;
  const convertValue = parseInt(value);
  return convertValue;
}

function setInnerTextByIDandValue(id, value) {
  document.getElementById(id).innerText = value;
}
