import addFirstContent from "./content1";
import addSecondContent from "./content2";
import addThirdContent from "./content3";

addFirstContent();

let dugme1 = document.getElementById("d1");
let dugme2 = document.getElementById("d2");
let dugme3 = document.getElementById("d3");

let wrapper = document.getElementById("content");
let nested = document.getElementById("content-nested");

function kontent1(){
wrapper.removeChild(nested);    
addFirstContent()
}

function kontent2(){
wrapper.removeChild(nested);
addSecondContent()
}

function kontent3(){
wrapper.removeChild(nested);    
addThirdContent()
}

dugme1.onclick = (kontent1);
dugme2.onclick = (kontent2);
dugme3.onclick = (kontent3);