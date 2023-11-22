function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var sports = document.querySelectorAll('input[name="sports"]:checked');
  var country = document.getElementById("country").value;
  
  var errorElement = document.getElementById("error");
  
  if (name === "") {
    errorElement.innerHTML = "Name is required";
    return false;
  }
  
  if (!validateEmail(email)) {
    errorElement.innerHTML = "Email is not valid";
    return false;
  }
  
  if (password.length < 8) {
    errorElement.innerHTML = "Password must be at least 8 characters";
    return false;
  }
  
  if (!gender) {
    errorElement.innerHTML = "Please select your gender";
    return false;
  }
  
  if (sports.length < 2) {
    errorElement.innerHTML = "Please select at least two sports";
    return false;
  }
  
  if (country === "") {
    errorElement.innerHTML = "Please select your country";
    return false;
  }
  
  errorElement.innerHTML = "";
  return true;
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
