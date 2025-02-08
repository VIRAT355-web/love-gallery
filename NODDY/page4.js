function toggleLove() {
    let message = document.querySelector(".message");
    message.style.display = message.style.display === "none" ? "block" : "none";
}

function playMusic() {
    let music = document.getElementById("backgroundMusic");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function nextPage() {
    window.location.href = "index.html";
}
