function validate() {
	pass1 = document.getElementById("pass1").value;
	pass2 = document.getElementById("pass2").value;
	if (pass1 != pass2) {
		window.alert("Passwords don't match :(");
	} else if (pass1.length < 8) {
		window.alert("Password is less than 8 characters! Do better");
	}  else {
		window.alert("I am in love with your password. Your password is great. Nothing is wrong with it. Your password and I are going to get married. Thank you for being fantastic.");
	}
}
