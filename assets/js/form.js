const form = document.getElementById("password-form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevents form from autosubmitting

  let characters = document.getElementById("characters").value;

  let numbersYes = document.getElementById("numbers-yes").value;

  let numbersNo = document.getElementById("numbers-no").value;

  let upperYes = document.getElementById("upper-yes").value;

  let upperNo = document.getElementById("upper-no").value;

  let lowerYes = document.getElementById("lower-yes").value;

  let owerNo = document.getElementById("lower-no").value;

  let symbolsYes = document.getElementById("symbols-yes").value;

  let symbolsNo = document.getElementById("symbols-no").value;

  console.log(symbolsNo);
});
