const speakBtn = document.getElementById("speakBtn");
const command = document.getElementById("command");
speakBtn.addEventListener("click", speakNow);

const styleSheet = document.getElementById("styleSheet");

// SpeechRecognition

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("Started..");
};

recognition.onresult = function (e) {
  const resultIndex = e.resultIndex;

  const { transcript } = e.results[resultIndex][0];
  command.innerHTML = transcript;
  speakOutLoud(transcript);
};

function speakNow() {
  recognition.start();
}

function speakOutLoud(message) {
  let whatToSpeak = message;

  if (whatToSpeak.includes("dark mode")) {
    styleSheet.setAttribute("href", "dark-mode.css");
  } else if (whatToSpeak.includes("light mode")) {
    styleSheet.setAttribute("href", "light-mode.css");
  } else if (whatToSpeak.includes("open YouTube")) {
    window.open("https://youtube.com", "_blank");
  }

  // The action of saying or expressing something aloud..
  const SpeechSynthesisUtterance =
    window.SpeechSynthesisUtterance || window.webkitSpeechSynthesisUtterance;

  const utterance = new SpeechSynthesisUtterance();

  utterance.volume = 1; // 100%
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.text = whatToSpeak;

  // Artificial production of human speech
  const speechSynthesis =
    window.speechSynthesis || window.webkitspeechSynthesis;

  speechSynthesis.speak(utterance);
}
