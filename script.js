console.log("Halo dari JavaScript!");
const btn = document.getElementById("download-Btn");
// Use optional chaining (?.) to prevent errors if the element is missing
btn?.addEventListener("click", () => {
    btn.textContent = "Starting...otw gus";
});

const pluginBtn = document.getElementById("pluginBtn");
pluginBtn?.addEventListener("click", () => {
    pluginBtn.textContent = "⏳ Mengunduh...";
});

let clickCount = 0;
const title = document.querySelector(".title");
title?.addEventListener("click", () => {
    clickCount++;
    if(clickCount === 5){
        alert("Bro found the secret!");
    }
});
