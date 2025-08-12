function myFunction(e) {
    e.preventDefault();
    let email = document.myForm.email.value;
    let pass = document.myForm.pass.value;
    console.log(email);

    if (email.indexOf("@") <= 0) {
        document.getElementById('Message').innerHTML = "Invalid Email by @";
        return false;
    }
    else if (
        email.charAt(email.length - 4) != "." &&
        email.charAt(email.length - 3) != "."
    ) {
        document.getElementById("Message").innerHTML =
            "Invalid Email by .com/.in domain";
        return false;
    }
    if (pass !== null) {
        if (pass.trim() === "") {
            console.log('please enter the value');
        }
        else if (pass.length > 8 && pass.length < 20) {
            console.log('please enter the correct length...');
        } else {
            const hasUppercase = /[A-Z]/.test(pass);
            const hasLowercase = /[a-z]/.test(pass);
            const hasNumber = /[0-9]/.test(pass);
            const hasSpecialchar = /[!@#$%^&*(),.?\":{}|<>]/.test(pass);

            if (!hasUppercase) {
                console.log("Password must inclued at least one Uppercase Letter...");

            } else if (!hasLowercase) {
                console.log("Password must inclued at least one Lowercase Letter...");
            } else if (!hasNumber) {
                console.log("Password must inclued at least one Number...");
            } else if (!hasSpecialchar) {
                console.log("Password must inclued at least one Special Character...");
            } else {
                console.log("Password is Valid...");
            }

        }
    }
}





