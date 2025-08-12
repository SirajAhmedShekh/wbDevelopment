function myform(e){
    e.preventDefault();
let userName = document.getElementById('user').value;
let Password = document.getElementById('pass').value;
let confirmPassword = document.getElementById('confpass').value;
let mobile = document.getElementById('mobile_nuber').value;
let email = document.getElementById('email').value;

// user validation 

if(userName = ""){
    document.getElementById("username_smg").innerHTML= "please fill the username field";
    document.getElementById("username_msg").style.color = "red";
    return false;   
}else if(userName.length <= 2 || userName.length > 20){
document.getElementById("username_msg").innerHTML = "please enter the length between 2 to 20";
document.getElementById("username_msg").style.color = "red";
return false;
}else if(!isNaN(userName)){
    document.getElementById("username_msg").innerHTML = "Only characters are allowed";
    document.getElementById("username_msg").style.color ="red";
    return false;
}

// password validation

if(Password = ""){
document.getElementById("pass_msg").innerHTML = "please fill the password field";
document.getElementById("pass_msg").style.color = "red";
return false;
}else if(Password.length <= 5 || Password.length >20){
document.getElementById("pass_msg").innerHTML = "please enter the length between 5 to 20 ";
document.getElementById("pass_msg").style.color = "red";
return false;
}else if(Password != confirmPassword){
    document.getElementById("confpass_msg").innerHTML = "Password not matched";
     document.getElementById("confpass_msg").style.color = "red";
     return false;
}

// confirPass Validation

if(confirmPassword == ""){
    document.getElementById("confpass_msg").innerHTML = "please fill the confirmPassword field";
    document.getElementById("confpass_msg").style.color = "red";
    return false;
}

 // mobileNumber Validation

 if(mobile == ""){
    document.getElementById("mobile_msg").innerHTML = "please fill the mobile field";
document.getElementById("mobile_msg").style.color = "red";
    return false;
 }else if (isNaN(mobile)) {
    document.getElementById("mobile_msg").innerHTML =
      "Please enter a digit not a characters";
    document.getElementById("mobile_msg").style.color = "red";
    return false;
 } else if (mobile.length != 10) {
    document.getElementById("mobile_msg").innerHTML =
      "Mobile number must be a 10 digit.";
    document.getElementById("mobile_msg").style.color = "red";
    return false;
  }

   // email Validation

    if (email == "") {
    document.getElementById("email_msg").innerHTML =
      " Please fill the email field";
    document.getElementById("email_msg").style.color = "red";
    return false;
  } else if (email.indexOf("@") <= 0) {
    document.getElementById("email_msg").innerHTML = " @ Invalid Position.";
    document.getElementById("email_msg").style.color = "red";
    return false;
  }
 //length 19
  else if (
    email.charAt(email.length - 4) != "." &&
    email.charAt(email.length - 3) != "."
  ) {
    document.getElementById("email_msg").innerHTML = " Invalid Position.";
    document.getElementById("email_msg").style.color = "red";
    return false;
  }

}