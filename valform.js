function validateform() {
	alert("please fill appropiate details");
	var fn= document.forms["Form"]["Pavan"].value;
	
	var ln= document.forms["Form"]["Patil"].value;
	var date=document.forms["Form"]["date"].value;
	var ssc=document.forms["Form"]["ssc"].value;
	var hsc=document.forms["Form"]["hsc"].value;
	var dep=document.forms["Form"]["comp"].value;
	if(fn=""||ln=""||date=""||ssc=""||hsc=""||dep=""){
		alert("Please fill  all the details");
	}
	var name=/^[a-zA-z]+$/;
	if(name.test!=fn){
		alert("please fill appropiate details");
	}
	if(name.test!=fn){
		alert("please fill appropiate details");
	}
	if(name.test!=date){
		alert("please fill appropiate details");
	}
	if(name.test!=ssc){
		alert("please fill appropiate details");
	};
	if(name.test!=hsc){
		alert("please fill appropiate details");
	}
	if(name.test!=dep){
		alert("please fill appropiate details");
	}
}
