console.log("hello world");
let headline = document.getElementById("headline-1");
console.log(headline);
let answer1 = document.getElementById("answer-1");

answer1.addEventListener("click", function () {
  document.getElementById("question-1").textContent = "Incorrect!";
});
let answer2 = document.getElementById("answer-2");

answer2.addEventListener("click", function () {
  document.getElementById("question-1").textContent = "Correct!";
});
let answer3 = document.getElementById("answer-3");

answer3.addEventListener("click", function () {
  document.getElementById("question-1").textContent = "Incorrect!";
});
let answer4 = document.getElementById("answer-4");

answer4.addEventListener("click", function () {
  document.getElementById("question-2").textContent = "Correct!";
});

let answer5 = document.getElementById("answer-5");

answer5.addEventListener("click", function () {
  document.getElementById("question-2").textContent = "Incorrect!";
});

let answer6 = document.getElementById("answer-6");

answer6.addEventListener("click", function () {
  document.getElementById("question-2").textContent = "Incorrect!";
});
let answer7 = document.getElementById("answer-7");

answer7.addEventListener("click", function () {
  document.getElementById("question-3").textContent = "Incorrect!";
});

let answer8 = document.getElementById("answer-8");

answer8.addEventListener("click", function () {
  document.getElementById("question-3").textContent = "Correct!";
});

let answer9 = document.getElementById("answer-9");

answer9.addEventListener("click", function () {
  document.getElementById("question-3").textContent = "Incorrect!";
});