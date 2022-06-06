let signInPage = document.querySelector("#sign-in-page");
let emailInput = document.querySelector("input[type= 'email']");
let passwordInput = document.querySelector("input[type= 'password']");
let loginBtn = document.querySelector("input[value = 'LOGIN NOW']");
let emailAlert = document.querySelector(".email-alert");
let passwordAlert = document.querySelector(".password-alert");
let signInBtn = document.querySelector("#signin-btn");
let signUpBtn = document.querySelector("#signup-btn");
let signOutBtn = document.querySelector("#signout-btn");
let regExpEmail = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
let regExpPassword = new RegExp(/[a-z0-9]{8}/);

let validLogin = false;
let signedIn = false;

let checkEmail = (email) => {
  if (!regExpEmail.test(email)) {
    emailAlert.style.display = "block";
    return false;
  }
  return true;
};
let checkPassword = (password) => {
  if (!regExpPassword.test(password)) {
    passwordAlert.style.display = "block";
    return false;
  }
  return true;
};
let handleLoginView = (loggedIn) => {
  if (loggedIn) {
    signInPage.style.display = "none";
    signInBtn.style.display = "none";
    signUpBtn.style.display = "none";
    signOutBtn.style.display = "block";
  } else {
    signInPage.style.display = "flex";
    signInBtn.style.display = "inline-block";
    signUpBtn.style.display = "inline-block";
    signOutBtn.style.display = "none";
  }
  window.scroll(0, 0);
};
let doLoginCheck = () => {
  let validEmail = false,
    validPassword = false;
  loginBtn.addEventListener("click", () => {
    validEmail = checkEmail(emailInput.value);
    validEmail ? (emailAlert.style.display = "none") : null;
    validPassword = checkPassword(passwordInput.value);
    validPassword ? (passwordAlert.style.display = "none") : null;
    validLogin = validEmail && validPassword;
    if (validLogin) {
      emailInput.value = "";
      passwordInput.value = "";
      signedIn = true;
      handleLoginView(signedIn);
    }
    console.log({ signedIn });
  });
};
doLoginCheck();

let signOut = () => {
  signOutBtn.addEventListener("click", () => {
    signedIn = false;
    handleLoginView(signedIn);
  });
};
signOut();
