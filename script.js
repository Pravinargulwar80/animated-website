function registerUser() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  alert("Registered successfully!");
  showLogin();
}

function loginUser() {
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;
  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  if (loginEmail === storedEmail && loginPassword === storedPassword) {
    alert("Login successful!");
  } else {
    alert("Incorrect email or password.");
  }
}

function showSignup() {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("signupBox").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("signupBox").classList.add("hidden");
  document.getElementById("loginBox").classList.remove("hidden");
}

function toggleMode() {
  document.body.classList.toggle("dark-mode");
}
