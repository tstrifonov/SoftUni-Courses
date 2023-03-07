function validate() {
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

  const companyCheckBox = document.getElementById("company");
  const submitButton = document.getElementById("submit");

  const companyInfo = document.getElementById("companyInfo");
  const companyNumber = document.getElementById("companyNumber");

  const valid = document.getElementById("valid");

  //Use addEventListener() function to attach an event listener for the "change" event to the checkbox.
  companyCheckBox.addEventListener("change", () => {
    if (companyCheckBox.checked) {
      companyInfo.style.display = "block";
    } else {
      companyInfo.style.display = "none";
    }
  });

  /*
    Every field with an incorrect value when the [Submit] button is pressed should have the following style applied:
    - border-color: red
    - alternatively, if it’s correct it should have style border: none;
    */
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    let flag = true;
    if (!usernameCheck()) flag = false;
    if (!passwordCheck()) flag = false;
    if (!confirmPasswordCheck()) flag = false;
    if (!emailCheck()) flag = false;
    if (companyCheckBox.checked) {
      if (!companyNumberCheck()) flag = false;
    }
    /*
    If there are required fields with an incorrect value when the [Submit] button is pressed, 
    the div with id="valid" should become hidden ("display: none;"), 
    alternatively if all fields are correct the div should become visible.
    */
    flag ? (valid.style.display = "block") : (valid.style.display = "none");
  });

  //The username needs to be between 3 and 20 symbols inclusively and only letters and numbers are allowed.
  function usernameCheck() {
    const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
    if (usernameRegex.test(username.value)) {
      username.style.border = "none";
      return true;
    } else {
      username.style.border = "solid";
      username.style.borderColor = "red";
      return false;
    }
  }

  //The password and confirm-password must be between 5 and 15 inclusively symbols and only word characters are allowed (letters, numbers, and _).
  function passwordCheck() {
    const passwordRegex = /^[a-zA-Z0-9\_]{5,15}$/;
    if (
      passwordRegex.test(password.value) &&
      password.value === confirmPassword.value
    ) {
      password.style.border = "none";
      return true;
    } else {
      password.style.border = "solid";
      password.style.borderColor = "red";
      return false;
    }
  }

  //The inputs of the password and confirm-password field must match.
  function confirmPasswordCheck() {
    const passwordRegex = /^[a-zA-Z0-9\_]{5,15}$/;
    if (
      passwordRegex.test(confirmPassword.value) &&
      password.value === confirmPassword.value
    ) {
      confirmPassword.style.border = "none";
      return true;
    } else {
      confirmPassword.style.border = "solid";
      confirmPassword.style.borderColor = "red";
      return false;
    }
  }

  //The email field must contain the “@” symbol and at least one "."(dot) after it.
  function emailCheck() {
    const emailRegex = /.*@.*\..*/;
    // /^[a-z0-9]*\@[a-z0-9]+\.[a-z0-9]+$/;
    if (emailRegex.test(email.value)) {
      email.style.border = "none";
      return true;
    } else {
      email.style.border = "solid";
      email.style.borderColor = "red";
      return false;
    }
  }

  //The Company Number field must be a number between 1000 and 9999.
  function companyNumberCheck() {
    if (
      Number(companyNumber.value) >= 1000 &&
      Number(companyNumber.value) <= 9999
    ) {
      companyNumber.style.border = "none";
      return true;
    } else {
      companyNumber.style.border = "solid";
      companyNumber.style.borderColor = "red";
      return false;
    }
  }
}
