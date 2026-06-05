document.addEventListener("DOMContentLoaded", () => {
    const countDisplay = document.getElementById("review-count");

    if (countDisplay) {
        let currentCount = parseInt(localStorage.getItem("formReviewsCount")) || 0;
        currentCount++;
        localStorage.setItem("formReviewsCount", currentCount);
        countDisplay.textContent = currentCount;
    }
    
    const reviewForm = document.querySelector("form");
    if (reviewForm && !document.getElementById("product-select")) {
        reviewForm.addEventListener("submit", () => {
            let reviewCount = localStorage.getItem("reviewCount") || 0;
            reviewCount = parseInt(reviewCount) + 1;
            localStorage.setItem("reviewCount", reviewCount);
        });
    }
});