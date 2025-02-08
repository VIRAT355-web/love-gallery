function playMusic() {
    const song = document.getElementById("loveSong");
    song.play();
}

function nextPage(choice) {
    if (choice === 'yes') {
        window.location.href = "page3.html";
    } else {
        window.location.href = "page3.html"; // Change this if you want a separate Maybe page
    }
}
