// funtion of to get a text from html tag
function getInnerTextById(id) {
  const value = document.getElementById(id).innerText;
  const convertValue = parseInt(value);
  return convertValue;
}

function setInnerTextByIDandValue(id, value) {
  document.getElementById(id).innerText = value;
}
