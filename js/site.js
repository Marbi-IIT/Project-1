function checkempty() {
    
    var fname = document.forms["form1"]["fullname"].value
    var phone = document.forms["form1"]["phone"].value
    var email = document.forms["form1"]["email"].value

    if((!fullname) || (!phone) || (!email) ) {
        alert("Please fill out the required fields");
        return false;
    }
}