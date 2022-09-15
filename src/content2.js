export default function addSecondContent(){
  let placeHolder = document.getElementById("content");

let div2 = document.createElement("div");
div2.id = "content-nested";
div2.classList.add("div1");

placeHolder.appendChild(div2);


let mainText = document.createElement("p");
div2.appendChild(mainText);
mainText.innerHTML = "Teletina pod sachom - 150 din <br><br> Bacva rakije - 100 din <br><br> Bokal vina - besplatno <br><br> Pasuljcina - na racun kuce "
};