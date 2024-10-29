// start function section his register page 
function validate(){
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var confirmPass = document.getElementById("confirm").value;
    var result = document.getElementById("result");
    
    result.setAttribute("class","alert alert-danger text-center");
    
    // form section 
    if(user=="" && email=="" && password=="" && confirmPass==""){
        result.innerHTML = "Enter Data in Form";
        return false;
    }

    // user section 
    else if(user.length<5 || user.length>15){
        result.innerHTML = "Enter 5-15 Character in Name";
        return false;
    }

    // email section 
    else if(email.indexOf("@")==-1 || email.indexOf(".com")==-1){
        result.innerHTML = "Enter Valid Email";
        return false;
    }

    // password section
    else if(password==""){
        result.innerHTML = "Enter Password";
        return false;
    }
    else if(password.length<8 || password.length>20){
        result.innerHTML = "Enter 8-20 Character in Password";
        return false;
    } 
     
    // confirm password section 
    else if(password != confirmPass){
        result.innerHTML = "Match Password"
        return false;
    }
    
    else{
        return true;
    }
    // end function section his register page 
    
}