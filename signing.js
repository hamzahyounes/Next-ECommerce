let toastPanner = document.querySelector(".toast-panner");
let signInPage = document.querySelector("#sign-in-page");
let emailInput = document.querySelector("input[type= 'email']");
let passwordInput = document.querySelector("input[type= 'password']");
let loginBtn = document.querySelector("input[value = 'LOGIN NOW']");
let emailAlert = document.querySelector(".email-alert");
let passwordAlert = document.querySelector(".password-alert");
let signInBtn = document.querySelector("#signin-btn");
let signUpBtn = document.querySelector("#signup-btn");
let signOutBtn = document.querySelector("#signout-btn");
let cartIcon = document.querySelector("#cart-icon");
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
    cartIcon.style.display = "block";
  } else {
    signInPage.style.display = "flex";
    signInBtn.style.display = "inline-block";
    signUpBtn.style.display = "inline-block";
    signOutBtn.style.display = "none";
    cartIcon.style.display = "none";
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
      showToastPanner("You Logged in successfully", true);
      handleLoginView(signedIn);
    }
    console.log({ signedIn });
  });
};
doLoginCheck();

let signOut = () => {
  signOutBtn.addEventListener("click", () => {
    signedIn = false;
    showToastPanner("You signed out", true);
    handleLoginView(signedIn);
  });
};
signOut();

let handleAddToCart = () => {
  if (signedIn) showToastPanner("Added to cart successfully", true);
  else showToastPanner("Log in to access your cart", false);
};
function showToastPanner(message, option) {
  toastPanner.style.right = "1.5rem";
  setTimeout(() => {
    if (window.innerWidth >= 1400) {
      toastPanner.style.width = "20rem";
      toastPanner.style.height = "5rem";
    }
    if (option) {
      toastPanner.innerHTML = `<i style="margin: 0 1rem; font-size: 1.5rem" class="bi bi-check-circle-fill"></i> ${message}`;
      toastPanner.style.color = "rgb(0, 228, 0)";
    } else {
      toastPanner.innerHTML = `<i style="margin: 0 1rem; font-size: 1.5rem" class="bi bi-exclamation-circle-fill"></i> ${message}`;
      toastPanner.style.color = "tomato";
    }
    setTimeout(() => {
      toastPanner.style.right = "-100%";
    }, 3000);
  }, 50);
}
