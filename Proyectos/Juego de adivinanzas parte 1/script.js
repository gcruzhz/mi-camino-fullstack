let randomNumber = Math.floor(Math.random() * 100) + 1;
function checkGuess() {
const inputElement = document.getElementById("guess");
const feedbackElement = document.getElementById("feedback");
let guess = inputElement.value;
if (guess == randomNumber) {
    feedbackElement.style.color = "green";
    feedbackElement.innerHTML = "¡Felicidades! Adivinaste el número.";
} else if (guess < randomNumber) {
    feedbackElement.style.color = "red";
    feedbackElement.innerHTML = "Demasido bajo!. Intenta de nuevo.";
}else{
    feedbackElement.style.color = "red";
    feedbackElement.innerHTML = "Demasido alto!. Intenta de nuevo.";
}