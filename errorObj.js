
function register(){
    try{
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let college = document.getElementById("college").value;
        let year = document.getElementById("year").value;
        let branch = document.getElementById("branch").value;
        let gender = document.getElementById("gender").value;
        if(name == "" || email == "" || phone == "" || college == "" || year == "" || branch == "" || gender==""){
            throw "Please fill all the fields";
}
        else if(!validateEmail(email)){
            throw "Please enter a valid email address";
        }
        else if(!validatePhone(phone)){
            throw "Please enter a valid phone number";
        }
        else{
            alert("Registration Successful");
        }
    }
    catch(err){
        alert(err);
    }
}                        
function validateEmail(email)
{
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function validatePhone(phone)
{
    let re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(phone);
}
