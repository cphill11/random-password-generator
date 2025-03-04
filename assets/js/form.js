const form = document.getElementById("password-form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevents form from autosubmitting

  let characters = document.getElementById("characters").value;
  let numbersYes = document.getElementById("numbers-yes").value;
  let numbersNo = document.getElementById("numbers-no").value;
  let upperYes = document.getElementById("upper-yes").value;
  let upperNo = document.getElementById("upper-no").value;
  let lowerYes = document.getElementById("lower-yes").value;
  let lowerNo = document.getElementById("lower-no").value;
  let symbolsYes = document.getElementById("symbols-yes").value;
  let symbolsNo = document.getElementById("symbols-no").value;
  let errorMsg = document.querySelector("#errorMsg");

  // js for form:
  // numbers 6-225
//   if (characters.value.length === 0 || isNaN(characters.value)) {
//     errorMsg.innerHTML = "Please enter a number between 6 and 255";   
//   } else 
//  });

  // checkbox for numbers-yes & numbers-no

  
  // checkbox for upper-yes and upper-no
  // checkbox for lower Yes & lower no
  // checkbox for symbols yes & symbols
}); 