function validation(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error = document.getElementById("error");
    var text;

    error.style.padding = "10px";

    if(fname.length <2){
        text = "Please Enter Valid Name";
        error.innerHTML = text;
        return false;
    }

    if(lname.length <2){
        text = "Please Enter Valid Name";
        error.innerHTML = text;
        return false;
    }

    if(isNaN(phone)|| phone.length != 10){
        text = "Please Enter Valid Phone Number";
        error.innerHTML = text;
        return false; 
    }

    if(email.indexOf("@") == -1 || email.length <6){
        text = "Please Enter Valid Email Address";
        error.innerHTML = text;
        return false; 
    }

    if(message.length <= 100){
        text = "Please Enter More Than 100 Characters";
        error.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully")
    return true;

}