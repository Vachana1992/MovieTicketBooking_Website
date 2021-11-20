var $ = function (id) {
    return document.getElementById(id);
}
var login = function () {
	var username = $("username").value;
	var password1 = $("password").value;
	var isValid = true;
	
	if ($("username").value == "") {
		$("username_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else {
		$("username_error").firstChild.nodeValue = "";
	} 
	
	if ($("password").value == "") {
		$("password_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else {
		$("password_error").firstChild.nodeValue = "";
	}

	if($("username").value !== "" & $("password").value !== ""){
		if (password1 !== username+"2020") {
			$("login_error").firstChild.nodeValue = "Invalid Password";
			isValid = false;
		} else {
			$("login_error").firstChild.nodeValue = "";
		}  
	}
	 
	if (isValid) {
		$("login_form").submit(); 
	}
}

window.onload = function () {
    $("login_btn").onclick = login;
    $("username").focus();
}
