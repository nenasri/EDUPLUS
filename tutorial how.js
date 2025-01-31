document.addEventListener("DOMContentLoaded", function() {
    const completeButtons = document.querySelectorAll(".complete-step");

    completeButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Step completed!");
            button.disabled = true;
            button.style.backgroundColor = "#808080"; // Disabled color
            button.textContent = "Completed";
        });
    });
});
