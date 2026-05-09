const yearElement = document.querySelector("#currentyear");
const today = new Date();
yearElement.innerHTML = today.getFullYear();

const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.innerHTML = "Last Modification: " + document.lastModified;