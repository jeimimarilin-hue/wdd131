const products = [
  { id: "fc-1020", name: "flux capacitor", averagerating: 4.5 },
  { id: "bc-1998", name: "power converters", averagerating: 3.9 },
  { id: "nv-1987", name: "vaporizer", averagerating: 5.0 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 4.2 },
  { id: "lr-1933", name: "time machine", averagerating: 4.7 }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product-select");

    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name.toUpperCase();
            productSelect.appendChild(option);
        });
    }
});