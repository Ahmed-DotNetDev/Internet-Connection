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

function GoAccount() {
    window.location = 'https://github.com/Ahmed-DotNetDev';
}

let paragraph = document.getElementById("describe");
paragraph.style.fontSize = '20px';
paragraph.style.fontWeight = '600';
paragraph.style.color = '#f5f5f5';
paragraph.style.marginTop = '8px';
paragraph.style.letterSpacing = '1px'


const sentences = ["Ahmed Abdelrahman", "Software engineer","Check my Github✅"];
let currentSentenceIndex = 0;
const typingEffect = document.getElementById('typingEffect');

function typeAndDelete(sentence) {
  let index = 0;

  function displayLetter() {
    if (index < sentence.length) {
      typingEffect.textContent += sentence[index];
      index++;
      setTimeout(displayLetter, 60);
    } else {
      setTimeout(deleteLetter, 300);
    }
  }

  function deleteLetter() {
    if (index > 0) {
      typingEffect.textContent = typingEffect.textContent.slice(0, -1);
      index--;
      setTimeout(deleteLetter, 40);
    } else {
      setTimeout(() => {
        typingEffect.textContent = "";
        currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
        typeAndDelete(sentences[currentSentenceIndex]);
      }, 1000);
    }
  }

  displayLetter();
}

typeAndDelete(sentences[currentSentenceIndex]);

