function validate(event) {
    event.preventDefault(); // Prevent form submission for validation

    const fields = {
        name: { value: document.getElementById("name").value, errorId: "error1", errorMsg: "*Please enter your name" },
        phone: { value: document.getElementById("phone").value, errorId: "error2", errorMsg: "*Please enter a valid 10-digit phone number" },
        email: { value: document.getElementById("email").value, errorId: "error3", errorMsg: "*Please enter a valid email address" },
        address: { value: document.getElementById("address").value, errorId: "error5", errorMsg: "*Please enter your address" },
        gender: { value: document.querySelector('input[name="Gender"]:checked'), errorId: "error4", errorMsg: "*Please select your gender" },
        hobbies: { value: document.querySelectorAll('input[name="hobs[]"]:checked'), errorId: "error6", errorMsg: "*Please select at least one hobby" },
        skills: { value: document.querySelectorAll('input[name="skll[]"]:checked'), errorId: "error7", errorMsg: "*Please select at least one skill" },
        country: { value: document.getElementById("countri").value, errorId: "error8", errorMsg: "*Please select your Country" }
    };

    let valid = true;

    // Clear previous error messages
    Object.values(fields).forEach(field => {
        document.getElementById(field.errorId).innerHTML = "";
    });

    // Validate each field
    Object.entries(fields).forEach(([key, field]) => {
        switch (key) {
            case 'phone':
                if (field.value === "" || isNaN(field.value) || field.value.length !== 10) {
                    document.getElementById(field.errorId).innerHTML = field.errorMsg;
                    valid = false;
                }
                break;
            case 'email':
                if (field.value === "" || !field.value.match(/^[A-Za-z\._\-0-9]+@[A-Za-z]+\.[a-z]{2,4}$/)) {
                    document.getElementById(field.errorId).innerHTML = field.errorMsg;
                    valid = false;
                }
                break;
            case 'gender':
                if (field.value === null) {
                    document.getElementById(field.errorId).innerHTML = field.errorMsg;
                    valid = false;
                }
                break;
            case 'hobbies':
            case 'skills':
                if (field.value.length === 0) {
                    document.getElementById(field.errorId).innerHTML = field.errorMsg;
                    valid = false;
                }
                break;
            case 'country':
                if (field.value === "") {
                    document.getElementById(field.errorId).innerHTML = field.errorMsg;
                    valid = false;
                }
                break;
            default:
                if (field.value === "") {
                    document.getElementById(field.errorId).innerHTML = field.errorMsg;
                    valid = false;
                }
                break;
        }
    });

    if (valid) {
        alert("Your form has been submitted !!");
        document.querySelector('form').submit(); // Submit the form if valid
    } else {
        alert("Please fill in all required fields.");
    }
}

// Attach the validate function to the form's submit event
document.querySelector('form').addEventListener('submit', validate);
