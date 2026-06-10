console.log("Halo dari JavaScript!");
const btn = document.getElementById("downloadBtn");

btn.addEventListener("click", () => {
    btn.textContent = "Starting...otw gus";
});
const pluginBtn = document.getElementById("pluginBtn");

pluginBtn.addEventListener("click", () => {
    pluginBtn.textContent = "⏳ Mengunduh...";
});
let clickCount = 0;

document.querySelector(".title")
.addEventListener("click", () => {
    clickCount++;

    if(clickCount === 5){
        alert("Bro found the secret!");
    }
});
