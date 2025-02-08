function submitName() {
    let name = document.getElementById('nameInput').value;
    if (name) {
        alert('Hello ' + name + '! You are special! 💖');
    } else {
        alert('Please enter your name!');
    }
}

function nextPage() {
    window.location.href = 'page4.html'; // Redirect to page4.html
}
