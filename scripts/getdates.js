const yearElement = document.querySelector("#currentyear");
const today = new Date();
yearElement.textContent = today.getFullYear();

const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;