// Signup function
function signup() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (name == "" || email == "" || password == "") {
    alert("Please fill all fields!");
  } else {
    alert("Account created! Welcome " + name + " 🎉");
  }
}

// Login function
function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email == "" || password == "") {
    alert("Please fill all fields!");
  } else {
    alert("Login successful! Welcome back 👋");
  }
}