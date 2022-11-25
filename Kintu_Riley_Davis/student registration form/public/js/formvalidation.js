function validateForm() {
	let val = 0;

	var surName = document.register.surName;
	var givenName = document.register.givenName;
	var email = document.register.email;
	var password = document.register.password;

	// Error

	var surNameError = document.getElementById("surNameerr");
	var givenNameError = document.getElementById("givenNameerr");
	var emailError = document.getElementById("emailerr");
	var passwordError = document.getElementById("passworderr");

	const alphabet = /^([A-Za-z]{2,25})$/;
	if (surName.value == "") {
		surName.style.border = "1px solid red";
		surNameError.textContent = "This field is required.";
		surNameError.style = "color: red; , font-size:10;";
		val++;
	} else if (!surName.value.match(alphabet)) {
		surName.style.border = "1px solid red";
		surNameError.textContent = "This field is alphabetic.";
		surNameError.style = "color: red; , font-size:10;";
		return false;
	} else {
		surName.style.border = "1px solid green";
		surNameError.textContent = "";
	}

	if (givenName.value == "") {
		givenName.style.border = "1px solid red";
		givenNameError.textContent = "This field is required.";
		givenNameError.style = "color: red; , font-size:10;";
		val++;
	} else if (!givenName.value.match(alphabet)) {
		givenName.style.border = "1px solid red";
		givenNameError.textContent = "This field is alphabetic.";
		givenNameError.style = "color: red; , font-size:10;";
		return false;
	} else {
		givenName.style.border = "1px solid green";
		givenNameError.textContent = "";
	}

	if (email.value == "") {
		email.style.border = "1px solid red";
		emailError.textContent = "This field is required.";
		emailError.style = "color: red; , font-size:10;";
		val++;
	} else {
		email.style.border = "1px solid green";
		emailError.textContent = "";
	}

	if (password.value == "") {
		password.style.border = "1px solid red";
		passwordError.textContent = "This field is required.";
		passwordError.style = "color: red; , font-size:10;";
		val++;
		return false;
	} else if (password.value.length < 6) {
		password.style.border = "1px solid red";
		passwordError.textContent = "The password must be at least 6 characters long";
		passwordError.style = "color: red; , font-size:10;";
		return false;
	} else if (password.value.length > 16) {
		password.style.border = "1px solid red";
		passwordError.textContent = "The password must not exceed 16 characters";
		passwordError.style = "color: red; , font-size:10;";
		return false;
	} else {
		password.style.border = "1px solid green";
		passwordError.textContent = "";
	}
}
