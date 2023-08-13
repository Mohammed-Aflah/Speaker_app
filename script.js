let button = document.querySelector(".speak_btn");
let text = document.getElementById("inp");
let reset=document.querySelector('.reset_btn');
reset.addEventListener("click",()=>{
    text.value=""
})
button.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(text.value);
  speechSynthesis.speak(utterance);
});
