var $ = function (id) {
    return document.getElementById(id);
}
var pay = function () {
	var name = $("name").value;
	var card_no = $("card_no").value;
	var exp = $("exp").value;
	var cvc = $("cvc").value;
	var isValid = true;
	
	if ($("name").value == "") {
		$("name_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else {
		$("name_error").firstChild.nodeValue = "";
	} 
	
	if ($("card_no").value == "") {
		$("card_no_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else {
		$("card_no_error").firstChild.nodeValue = "";
	}
	
	if ($("exp").value == "") {
		$("exp_error").firstChild.nodeValue = " This field is required.";
		isValid = false;
	} else {
		$("exp_error").firstChild.nodeValue = "";
	} 
	
	if ($("cvc").value == "") {
		$("cvc_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else {
		$("cvc_error").firstChild.nodeValue = "";
	} 

	
	 
	if (isValid) {
		$("payment_form").submit(); 
	}
}

window.onload = function () {
    $("payment_btn").onclick = pay;
    $("name").focus();
}
