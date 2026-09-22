const question ="¿Que planeta es conocido como el planeta rojo?": 
const choices = ["Tierra", "Marte", "Júpiter", "Saturno"];
const correctAnswer = "Marte";
function checkAnswer(button) {
if (button.value === correctAnswer) {
    document.getElementById("result").innerHTML = "¡Correcto!"; }else{
document.getElementById("result").innerHTML = "Incorrecto.";
}
function displayQuestion() {
    document.getElementById("question").  
    innerHTML = question;
}
 displayQuestion()
 for (let i = 0; i < 4; i++) {
    const btn = document.getElementById('choice${i+1');
btn.innerHTML = choices[i];
btn.value = choices[i];
 }
}