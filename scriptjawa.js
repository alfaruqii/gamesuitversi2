function pilihanComputer() {
  let comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getResult(comp, player) {
  if (comp == player) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG" : "KALAH";
  if (player == "orang") return comp == "gajah" ? "KALAH" : "MENANG";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG";
}

function rolling(){
  const daatanew = document.querySelector(".img-komputer")
  const pict = ["gajah","semut","orang"]
  let i = 0
  const waktuAwal = new Date().getTime()
  setInterval(function(){
    if (new Date().getTime() - waktuAwal > 1000){
      clearInterval;
      return;
    }
    daatanew.setAttribute("src","img/"+pict[i++]+".png")
    if (i == pict.length) i = 0
  },100)
}

const dataTester = document.querySelectorAll("li img")
dataTester.forEach(function(pil){
  pil.addEventListener("click",function(){
    const dataKomputer = pilihanComputer()
    const pilihanPlayer = pil.className
    const hasil = getResult(dataKomputer,pilihanPlayer)
    rolling()
    setTimeout(function(){
    const dataSatu = document.querySelector(".img-komputer")
    dataSatu.setAttribute("src","img/"+dataKomputer+".png")
    const info = document.querySelector(".info")
    info.innerHTML = hasil
    },1000)
  })
})





// const pGajah = document.querySelector(".gajah");

// pGajah.addEventListener("click", function () {
//   const pilihanBot = pilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getResult(pilihanBot, pilihanPlayer);
//   console.log(pilihanBot);
//   console.log(pilihanPlayer);
//   console.log(hasil);

//   const imgCom = document.querySelector(".img-komputer");
//   imgCom.setAttribute("src", "img/" + pilihanBot + `.png`);
//   const kelasInfo = document.querySelector(".info")
//   kelasInfo.innerHTML = `kamu ${hasil}`;
// });
