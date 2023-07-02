var hint = document.getElementById("hint");

function updateConnectionStatus() {
    var status = document.getElementById("status");
    if (navigator.onLine) {
        status.innerHTML = "Online";
        status.classList.add("online");
        status.classList.remove("offline");
    } else {
        status.innerHTML = "Offline";
        status.classList.add("offline");
        status.classList.remove("online");
    }
}

window.addEventListener("load", updateConnectionStatus);

window.addEventListener("online", function (e) {
    updateConnectionStatus();
    hint.innerHTML = "And we're back!";
});

window.addEventListener("offline", function (e) {
    updateConnectionStatus();
    hint.innerHTML = "Hey, it looks like you're offline.";
});

let paragraph = document.getElementById("describe");
paragraph.style.fontSize = '20px';
paragraph.style.fontWeight = '600';
paragraph.style.color = 'blue';
paragraph.style.marginTop = '6px';
