const amazina = document.getElementById("userInput");
amazina.style.color = "green";
const igisubizo = document.getElementById("result");
const btn = document.getElementById("btn");
const amasaha = new Date().getHours();
btn.addEventListener("click", getInputValue);
// const amazina1 = amazina.trim();
function getInputValue() {
  if (amasaha < 4 && amasaha >= 2) {
    igisubizo.textContent = `Urakazaneza ${amazina1.value.trim()}!!, Ubungubu turi ${amasaha} zigicuku.`;
  } else {
    igisubizo.innerHTML = `Nshuti ${amazina.value.trim()} ubungubu namasaha yakazi, Tukaba turi ${amasaha}.`;
  }
}
