var $ = function (id) {
    return document.getElementById(id);
}
var register = function () {
	var password1 = $("password1").value;
	var password2 = $("password2").value;
	var isValid = true;
	
	if ($("name").value == "") {
		$("name_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else {
		$("name_error").firstChild.nodeValue = "";
	}
	
	if ($("email").value == "") {
		$("email_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else {
		$("email_error").firstChild.nodeValue = "";
	}
	
	if ($("phone").value == "") {
		$("phone_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else {
		$("phone_error").firstChild.nodeValue = "";
	}
	
	if($("datepicker").value == ""){
		$("dob_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else{
		$("dob_error").firstChild.nodeValue = "";
	}
	
	if ($("password1").value == "") {
		$("password1_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else {
		$("password1_error").firstChild.nodeValue = "";
	}
	
	if ($("password2").value == "") {
		$("password2_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else {
		$("password2_error").firstChild.nodeValue = "";
	}
	
	if(password1 !=="" & password2!==""){
		if (password1 !== password2) {
			$("password2_error").firstChild.nodeValue = "Passwords must match";
			isValid = false;
		} else {
			$("password2_error").firstChild.nodeValue = "";
		}  
	}
	 
	
	if (isValid) {
		$("signup_form").submit(); 
	}
}

window.onload = function () {
    $("create_btn").onclick = register;
    $("name").focus();
}
