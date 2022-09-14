
export default function addFirstContent(){
    let placeHolderWrap = document.getElementById("content");
    let placeHolder = document.createElement("div");
    placeHolder.id = "content-nested";

placeHolderWrap.appendChild(placeHolder);

let div1 = document.createElement("div");
div1.classList.add("div1");
placeHolder.appendChild(div1);


let mainText = document.createElement("p");
div1.appendChild(mainText);
mainText.textContent = "U samom centru Niša, a ipak izdvojena od gradske buke u mirnom delu, nalazi se Chulina kafana. Osim ukusne hrane i vrhunske usluge, izdvajamo se po ambijentu koji nas okružuje. Zvuk žubora vode, cvrkut ptica i zelenilo učiniće da zaboravite na obaveze i probleme i prepustite se uživanju."

};