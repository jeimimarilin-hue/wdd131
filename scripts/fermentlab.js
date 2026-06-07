const fermentationTopics = [
    { name: "Biological Facts", info: "The science of microorganisms." },
    { name: "Setup Checklist", info: "Safe kitchen tools guide." },
    { name: "Cultivation Guide", info: "Step-by-step instructions." }
];

function buildCards(data) {
    const cardContainer = document.querySelector("#ferment-cards");
    cardContainer.innerHTML = data.map(topic => `
        <div class="ferment-card">
            <h3>${topic.name}</h3>
            <p>${topic.info}</p>
            <button class="details-btn" data-info="${topic.info}">View Details</button>
        </div>
    `).join('');
}

document.querySelector("#fermentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const selectedProduct = document.querySelector("#productSelect").value;
    localStorage.setItem("favFerment", selectedProduct);
    
    alert("Success! Your preference for " + selectedProduct + " has been saved.");
});

document.querySelector("#ferment-cards").addEventListener("click", (e) => {
    if (e.target.classList.contains("details-btn")) {
        const info = e.target.getAttribute("data-info");
        alert("More Info: " + info);
    }
});

buildCards(fermentationTopics);