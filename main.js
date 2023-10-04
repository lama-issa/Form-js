document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var fullName = document.getElementById("fullName").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    
    var errorUsername = document.getElementById("errorUsername");
    var errorfullName = document.getElementById("errorfullName");
    var errormobileNumber = document.getElementById("errormobileNumber");
    var errorAge = document.getElementById("errorAge");
    var errorEmail = document.getElementById("errorEmail");
    var errorpassword = document.getElementById("errorpassword");
    var errorconfirmPassword = document.getElementById("errorconfirmPassword");
    var errorcountry = document.getElementById("errorcountry");

    
    
    var errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = ""; 

    // Validation rules
    var usernameRegex = /^[a-zA-Z0-9@_-]{3,}$/;
    var fullNameRegex = /^[a-zA-Z]{3,15}$/;
    var mobileNumberRegex = /^05\d{8}$/;
    var ageRegex = /^(1[89]|[2-9][0-9]|100)?$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,24}$/;

    var isValid = true;

    if (!usernameRegex.test(username)) {
        errorUsername.classList.add("d-block");
        errorUsername.style.color="red";
        isValid = false;
    }

    if (!fullNameRegex.test(fullName)) {
        errorfullName.classList.add("d-block");
        errorfullName.style.color="red";
        isValid = false;
    }

    if (!mobileNumberRegex.test(mobileNumber)) {
        errormobileNumber.classList.add("d-block");
        errormobileNumber.style.color="red";
        isValid = false;
    }

    if (age !== "" && !ageRegex.test(age)) {
        errorAge.classList.add("d-block");
        errorAge.style.color="red";
        isValid = false;
    }

    if (!emailRegex.test(email)) {
        errorEmail.classList.add("d-block");
        errorEmail.style.red="red";
        isValid = false;
    }

    if (country === "") {
        errorcountry.classList.add("d-block");
        errorcountry.style.color="red";
        isValid = false;
    }

    if (!passwordRegex.test(password)) {
        errorpassword.classList.add("d-block");
        errorpassword.style.color="red";
                isValid = false;
    }

    if (password !== confirmPassword) {
        errorconfirmPassword.classList.add("d-block");
        errorconfirmPassword.style.color="red";
        isValid = false;
    }

    if (isValid) {
        errorMessage.style.color = "green";
        errorMessage.innerHTML = "Registration successful!";
        errorMessage.style.fontSize="30px";
        errorMessage.style.textAlign="center";

        document.getElementById("signupForm").reset();
    }
});

function clearForm() {
    document.getElementById("signupForm").reset();
    document.getElementById("error-message").innerHTML = "";
    errorAge.classList.add('d-none');
    errorEmail.classList.add('d-none');
    errorUsername.classList.add('d-none');
    errorconfirmPassword.classList.add('d-none');
    errorcountry.classList.add('d-none');
    errorfullName.classList.add('d-none');
    errormobileNumber.classList.add('d-none');
    errorpassword.classList.add('d-none');
}
