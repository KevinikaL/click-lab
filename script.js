console.log("hello world");
let headline = document.getElementById("headline-1");
console.log(headline);
let answer1 = document.getElementById("answer-1");

answer1.addEventListener("click", function () {
  document.getElementById("question-1").textContent = "Incorrect!";
});