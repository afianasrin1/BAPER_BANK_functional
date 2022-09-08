// step 1: add click event handler with the submit button

document.getElementById("btn-submit").addEventListener("click", function () {
  // step 1:get the email address inside the email input field
  // always  remember to use .value to get text from an input field
  // console.log("submit Button clicked");
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  // get password
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  // DANGER:DO NOT VARIFY email password on the client
  // step 4:verify email password
  // if (email === "sontan@baap.com" && password === "secret") {
  //   console.log("valid user");
  // } else {
  //   console.log("invalid user");
  // }
  if (email === "sontan@baap.com" && password === "secret") {
    window.location.href = "bank.html";
  } else {
    alert("No Another page");
  }
});
