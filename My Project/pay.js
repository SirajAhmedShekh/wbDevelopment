

function paymentFunc(e) {
  e.preventDefault();
  let userName = document.getElementById("user").value.trim();
  let userEmail = document.getElementById("email").value.trim();
  let zipCode = document.getElementById("zipCode").value.trim();
  let cardName = document.getElementById("cardName").value.trim();
  let cardNumber = document.getElementById("cardNumber").value.trim();
  let cardCvv = document.getElementById("cardCvv").value.trim();


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
    document.getElementById("username_msg").innerHTML = "";
  }


  // ==== email Validation ====

  if (userEmail == "") {
    document.getElementById("email_msg").innerHTML =
      " Please fill the email field";
    document.getElementById("email_msg").style.color = "gray";
    return false;
  } else if (userEmail.indexOf("@") <= 0) {
    document.getElementById("email_msg").innerHTML = " @ Invalid Position.";
    document.getElementById("email_msg").style.color = "gray";
    return false;
  }
  //length 19
  else if (
    userEmail.charAt(userEmail.length - 4) != "." &&
    userEmail.charAt(userEmail.length - 3) != "."
  ) {
    document.getElementById("email_msg").innerHTML = " Invalid Position.";
    document.getElementById("email_msg").style.color = "gray";
    return false;
  } else {
    document.getElementById("email_msg").innerHTML = "";
  }

  // ==== zip code Validation ====

  if (zipCode == "") {
    document.getElementById("zipCode_msg").innerHTML = "please fill the zipcode field";
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
    document.getElementById("zipCode_msg").innerHTML = "";
  }

  // ==== name on card validation =====

  if (cardName == "") {
    document.getElementById("cardname_msg").innerHTML = "please fill the cardname field";
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
    document.getElementById("cardname_msg").innerHTML = "";
  }


  // ==== card number Validation ====

  if (cardNumber == "") {
    document.getElementById("cardnumber_msg").innerHTML = "please fill the cardnumber field";
    document.getElementById("cardnumber_msg").style.color = "gray";
    return false;
  } else if (cardNumber.length < 16 || cardNumber.length > 16) {
    document.getElementById("cardnumber_msg").innerHTML = "please enter the length of 16 ";
    document.getElementById("cardnumber_msg").style.color = "gray";
    return false;
  } else if (isNaN(cardNumber)) {
    document.getElementById("cardnumber_msg").innerHTML = "Only number are allowed";
    document.getElementById("cardnumber_msg").style.color = "gray";
    return false;
  } else {
    document.getElementById("cardnumber_msg").innerHTML = "";
  }

  // ==== Cvv Validation ====

  if (cardCvv == "") {
    document.getElementById("cardcvv_msg").innerHTML = "please fill the cardnumber field";
    document.getElementById("cardcvv_msg").style.color = "gray";
    return false;
  } else if (cardCvv.length < 3 || cardCvv.length > 3) {
    document.getElementById("cardcvv_msg").innerHTML = "please enter the length of 3 ";
    document.getElementById("cardcvv_msg").style.color = "gray";
    return false;
  } else if (isNaN(cardCvv)) {
    document.getElementById("cardcvv_msg").innerHTML = "Only number are allowed";
    document.getElementById("cardcvv_msg").style.color = "gray";
    return false;
  } else {
    document.getElementById("cardcvv_msg").innerHTML = "";
  }
};