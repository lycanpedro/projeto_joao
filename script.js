// script.js

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("go");
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const audio = document.getElementById("background-music");

    button.addEventListener("click", function() {
        page1.style.display = "none";
        page2.style.display = "block";
        audio.play();
    });
});
