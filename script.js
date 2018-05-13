// You can code JavaScript here

console.log("Funcionando");

function speak() {
    var voice = new SpeechSynthesisUtterance();

    voice.text="This is the shoreline at Shanghai, China";
    speechSynthesis.speak(voice);
}