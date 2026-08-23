console.log("hello world");

let headline = document.getElementById("headline-1");

console.log(headline);

let score = 0;

let scoreboard = document.querySelector(".scoreboard");

let question1Answered = false;
let question2Answered = false;
let question3Answered = false;


// QUESTION 1

let answer1 = document.getElementById("answer-1");

answer1.addEventListener("click", function () {

  document.getElementById("question-1").textContent = "Incorrect!";

});


let answer2 = document.getElementById("answer-2");

answer2.addEventListener("click", function () {

  document.getElementById("question-1").textContent = "Correct!";

  document.body.style.backgroundColor = "green";

  answer2.style.backgroundColor = "green";

  answer2.style.borderColor = "green";

  answer2.style.color = "white";

  if (question1Answered === false) {
    score = score + 1;
    scoreboard.textContent = score;
    question1Answered = true;
  }

});


let answer3 = document.getElementById("answer-3");

answer3.addEventListener("click", function () {

  document.getElementById("question-1").textContent = "Incorrect!";

});


// QUESTION 2

let answer4 = document.getElementById("answer-4");

answer4.addEventListener("click", function () {

  document.getElementById("question-2").textContent = "Correct!";

  document.body.style.backgroundColor = "purple";

  answer4.style.backgroundColor = "purple";

  answer4.style.borderColor = "purple";

  answer4.style.color = "white";

  if (question2Answered === false) {
    score = score + 1;
    scoreboard.textContent = score;
    question2Answered = true;
  }

});


let answer5 = document.getElementById("answer-5");

answer5.addEventListener("click", function () {

  document.getElementById("question-2").textContent = "Incorrect!";

});


let answer6 = document.getElementById("answer-6");

answer6.addEventListener("click", function () {

  document.getElementById("question-2").textContent = "Incorrect!";

});


// QUESTION 3

let answer7 = document.getElementById("answer-7");

answer7.addEventListener("click", function () {

  document.getElementById("question-3").textContent = "Incorrect!";

});


let answer8 = document.getElementById("answer-8");

answer8.addEventListener("click", function () {

  document.getElementById("question-3").textContent = "Correct!";

  document.body.style.backgroundColor = "orange";

  answer8.style.backgroundColor = "orange";

  answer8.style.borderColor = "orange";

  answer8.style.color = "black";

  if (question3Answered === false) {
    score = score + 1;
    scoreboard.textContent = score;
    question3Answered = true;
  }

});


let answer9 = document.getElementById("answer-9");

answer9.addEventListener("click", function () {

  document.getElementById("question-3").textContent = "Incorrect!";

});