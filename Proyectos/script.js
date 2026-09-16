const inputValue = 10;
const milesToKm = false;
result = 0;
if (milesToKm) {
inputValue = inputValue * 1.60934;
}else{
inputValue = inputValue / 1.60934;
}
const resultString = inputValue + " miles are " + result + " km";
const resultElement = document.getElementById("resultElement");
resultElement.innerHTML = resultString;