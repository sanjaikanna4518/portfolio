function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for basic email validation

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (message === "") {
        alert("Please enter your message.");
        return false;
    }

    alert("Form submitted successfully!");
    // You can add code here to actually submit the form data to the server
    return true;
}
