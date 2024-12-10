const amazina = document.getElementById("izina").value;
const igisubizo = document.getElementById("result");
const btn = document.getElementById("buto");
const amasaha = new Date().getHours();
btn.onclick = () => {
  //const amazina1 = amazina.trim();
  if (amasaha < 4 && amasaha >= 2) {
    igisubizo.textContent = `Urakazaneza ${amazina}!!, Ubungubu turi ${amasaha} zigicuku.`;
    // console.log(`Urakazaneza ${amazina}!!, Ubungubu turi ${amasaha} zigicuku.`);
  } else {
    igisubizo.innerHTML = `Nshuti ${amazina} ubungubu namasaha yakazi, Tukaba turi ${amasaha}.`;
    console.log(`Urakazaneza ${amazina}!!, Ubungubu turi ${amasaha} zigicuku.`);
  }
};
