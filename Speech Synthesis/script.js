const utterance = new SpeechSynthesisUtterance();

utterance.lang = "pt-BR";
utterance.rate = 2;

function speak() {
  speechSynthesis.speak(utterance);
}

function stop() {
  speechSynthesis.cancel();
}

function setText(e) {
  utterance.text = e.target.innerText;
}
