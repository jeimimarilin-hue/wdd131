document.addEventListener("DOMContentLoaded", () => {
    const products = [
      { id: "fc-1020", name: "flux capacitor", averagerating: 4.5 },
      { id: "bc-1998", name: "power converters", averagerating: 3.9 },
      { id: "nv-1987", name: "vaporizer", averagerating: 5.0 },
      { id: "jj-1969", name: "warp equalizer", averagerating: 4.2 },
      { id: "lr-1933", name: "time machine", averagerating: 4.7 }
    ];

    const productSelect = document.getElementById("product-select");

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.disabled = true;
    placeholder.selected = true;
    placeholder.textContent = "Select a product...";
    productSelect.appendChild(placeholder);

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name.toUpperCase();
        productSelect.appendChild(option);
    });
});