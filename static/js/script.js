// static/js/script.js

function toggleAnswer(cardElement, answer) {
    var answerElement = cardElement.querySelector(".answer");

    if (answerElement.style.display === "none") {
        answerElement.innerHTML = "Answer: " + answer;
        answerElement.style.display = "block";
    } else {
        answerElement.innerHTML = "Answer: Hidden answer";
        answerElement.style.display = "none";
    }
}
