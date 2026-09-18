let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
function checkGuess() {
    attempts--;
const inputElement = document.getElementById("guess");
const feedbackElement = document.getElementById("feedback");
const guess = inputElement.value;
while (attempts > 0) {
    if (attempts === && guess != randomNumber) {
        feedbackElement.innerHTML = 'Game over! The correct number was ${randomNumber}.';
        feedbackElement.style.color = "red";
       break;
    }
if (guess == randomNumber) {
    attempts = 0;
    feedbackElement.style.color = "green";
    feedbackElement.innerHTML = "¡Felicidades! Adivinaste el número.";
    break;
} else if (guess < randomNumber) {
    feedbackElement.style.color = "red";
    feedbackElement.innerHTML = 'Too low! Try again. ${attemps} attempts remaining.'; 
    break;
}else{
    feedbackElement.style.color = "red";
    feedbackElement.innerHTML = 'Too high! Try again. ${attemps} attempts remaining.';
    break;
}
}
}