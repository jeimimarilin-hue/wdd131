document.addEventListener("DOMContentLoaded", () => {
    const reviewForm = document.querySelector("form");
    
    if (reviewForm) {
        reviewForm.addEventListener("submit", () => {
            let reviewCount = localStorage.getItem("reviewCount") || 0;
            reviewCount = parseInt(reviewCount) + 1;
            localStorage.setItem("reviewCount", reviewCount);
            console.log(`Review submitted. Total reviews: ${reviewCount}`);
        });
    }
});