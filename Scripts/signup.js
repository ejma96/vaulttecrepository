function signup() {
    let firstName = document.forms['signup-form']['firstname'].value;
    let lastName = document.forms['signup-form']['lastname'].value;
    let email = document.forms['signup-form']['email'].value;
    let phone = document.forms['signup-form']['phone'].value;
    let familyMembers = document.forms['signup-form']['familymembers'].value;
    let state = document.forms['signup-form']['state'].value;

    if (firstName == "") {
        alert("First Name must be filled out!");
        return false;

    }

    if (lastName == "") {
        alert("Last Name must be filled out!");
        return false;
    }

    if (email == "") {
        alert("Email must be filled out!");
        return false;
    }

    if (phone == "") {
        alert("Phone must be filled out!");
        return false;
    }

    if (familyMembers == "0") {
        alert("Please select your family size!");
        return false;
    }

    if (state == "0") {
        alert("Please select your state of residence!");
        return false;
    }

   
    alert("Thank you for your submission. A Vault-Tec Representative will be in touch shortly. Thank you for being prepared for the future!")
    
}