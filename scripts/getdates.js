/**
 * WDD 131: Assignment 01 - Dynamic Dates
 */

// 1. Obtener el año actual para el copyright
const yearElement = document.querySelector("#currentyear");
const today = new Date();
yearElement.innerHTML = today.getFullYear();

// 2. Obtener la fecha de la última modificación del documento
const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.innerHTML = "Last Modification: " + document.lastModified;