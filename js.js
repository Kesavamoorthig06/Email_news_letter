document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents actual form submission

    const feedback = document.getElementById("feedback");
    feedback.textContent = "Thank you for subscribing!";
    feedback.style.color = "green";

    // Clear the input field after submission
    this.reset();
});
