

// JavaScript to handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic form validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Display a success message
    alert("Thank you, " + name + "! Your message has been sent.");

    // Clear the form fields after submission
    document.getElementById("contactForm").reset();
});
