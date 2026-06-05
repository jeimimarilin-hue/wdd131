document.addEventListener("DOMContentLoaded", () => {
    const reviewForm = document.querySelector("form");
    if (reviewForm) {
        reviewForm.addEventListener("submit", () => {
            console.log("Review form submitted successfully.");
        });
    }
});