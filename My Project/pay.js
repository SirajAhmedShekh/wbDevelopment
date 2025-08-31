function paymentFunc(e) {
    e.preventDefault();
    let userName = document.getElementById("user");
    let userEmail = document.getElementById("email");
    let zipCode = document.getElementById("zipCode");
    let cardName = document.getElementById("cardName");
    let cardNumber = document.getElementById("cardNumber");
    let expMonth = document.getElementById("expMonth");
    let expYear = document.getElementById("expYear");
    let cardCvv = document.getElementById("cardCvv");


// ==== user validation =====

if (userName == "") {
    document.getElementById("username_msg").innerHTML = "please fill the username field";
    document.getElementById("username_msg").style.color = "gray";
    return false;
  } else if (userName.length <= 2 || userName.length > 20) {
    document.getElementById("username_msg").innerHTML = "please enter the length between 2 to 20";
    document.getElementById("username_msg").style.color = "gray";
    return false;
  } else if (!isNaN(userName)) {
    document.getElementById("username_msg").innerHTML = "Only characters are allowed";
    document.getElementById("username_msg").style.color = "gray";
    return false;
  } else {
    document.getElementById("username_msg").innerHTML = ""
  }


// ==== email Validation ====

  if (userEmail == "") {
    document.getElementById("email_msg").innerHTML =
      " Please fill the email field";
    document.getElementById("email_msg").style.color = "red";
    return false;
  } else if (userEmail.indexOf("@") <= 0) {
    document.getElementById("email_msg").innerHTML = " @ Invalid Position.";
    document.getElementById("email_msg").style.color = "red";
    return false;
  }
  //length 19
  else if (
    userEmail.charAt(userEmail.length - 4) != "." &&
    userEmail.charAt(userEmail.length - 3) != "."
  ) {
    document.getElementById("email_msg").innerHTML = " Invalid Position.";
    document.getElementById("email_msg").style.color = "red";
    return false;
  } else {
    document.getElementById("email_msg").innerHTML = ""
  }

// ==== zip code Validation ====

if (zipCode == "") {
    document.getElementById("zipCode_msg").innerHTML = "please fill the username field";
    document.getElementById("zipCode_msg").style.color = "gray";
    return false;
  } else if (zipCode.length < 6 || zipCode.length > 6) {
    document.getElementById("zipCode_msg").innerHTML = "please enter the length of 6 ";
    document.getElementById("zipCode_msg").style.color = "gray";
    return false;
  } else if (isNaN(zipCode)) {
    document.getElementById("zipCode_msg").innerHTML = "Only number are allowed";
    document.getElementById("zipCode_msg").style.color = "gray";
    return false;
  } else {
    document.getElementById("zipCode_msg").innerHTML = ""
  }

  // ==== name on card validation =====

if (cardName == "") {
    document.getElementById("cardname_msg").innerHTML = "please fill the username field";
    document.getElementById("cardname_msg").style.color = "gray";
    return false;
  } else if (cardName.length <= 2 || cardName.length > 20) {
    document.getElementById("cardname_msg").innerHTML = "please enter the length between 2 to 20";
    document.getElementById("cardname_msg").style.color = "gray";
    return false;
  } else if (!isNaN(cardName)) {
    document.getElementById("cardname_msg").innerHTML = "Only characters are allowed";
    document.getElementById("cardname_msg").style.color = "gray";
    return false;
  } else {
    document.getElementById("cardname_msg").innerHTML = ""
  }

  



}