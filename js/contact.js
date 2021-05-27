function Validate_for_form() {

    var contact_name = document.forms['myform']['name'].value;
    if (contact_name == "" || contact_name == null) {
        alert(" pls fill the Name field");
        return false;
    }

    var contact_email = document.forms['myform']['email'].value;
    if (contact_email == "" || contact_email == null) {
        alert(" pls fill the Email field");
        return false;
    }

    var contact_message = document.forms['myform']['message'].value;
    if (contact_message == "" || contact_message == null) {
        alert(" pls fill the Message field");
        return false;
    }


}