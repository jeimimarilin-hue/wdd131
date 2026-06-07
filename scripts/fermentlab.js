const fermentationTopics = [
    { name: "Biological Facts", info: "The science of microorganisms." },
    { name: "Setup Checklist", info: "Safe kitchen tools guide." },
    { name: "Cultivation Guide", info: "Step-by-step instructions." }
];

function buildCards(data) {
    const cardContainer = document.querySelector("#ferment-cards");
    cardContainer.innerHTML = '<h2>Fermentation Resources</h2>' + data.map(topic => `
        <div class="ferment-card">
            <h3>${topic.name}</h3>
            <p>${topic.info}</p>
        </div>
    `).join('');
}

document.querySelector("#fermentForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const product = document.querySelector("#productSelect").value;
    alert(product === "kefir" ? "Kefir is a probiotic powerhouse!" : "Yogurt is a delicious classic choice!");
    localStorage.setItem("favFerment", product);
});

buildCards(fermentationTopics);