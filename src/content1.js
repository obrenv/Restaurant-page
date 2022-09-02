
export default function addFirstContent(){

let paragraph = document.createElement("p");
let placeHolder = document.getElementById("content");

placeHolder.appendChild(paragraph);
paragraph.textContent = "JALA BRAT KURCA MI PUSHI";
};