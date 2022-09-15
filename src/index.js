import addFirstContent from "./content1";
import addSecondContent from "./content2";
import addThirdContent from "./content3";

addFirstContent();

let dugme1 = document.getElementById("d1");
let dugme2 = document.getElementById("d2");
let dugme3 = document.getElementById("d3");



function kontent1(){
    let wrapper = document.getElementById("content");
    let nested = document.getElementById("content-nested");    
wrapper.removeChild(nested);    
addFirstContent()
}

function kontent2(){
    let wrapper = document.getElementById("content");
let nested = document.getElementById("content-nested");
wrapper.removeChild(nested);
addSecondContent()
}

function kontent3(){
    let wrapper = document.getElementById("content");
let nested = document.getElementById("content-nested");
wrapper.removeChild(nested);    
addThirdContent()
}

dugme1.onclick = (kontent1);
dugme2.onclick = (kontent2);
dugme3.onclick = (kontent3);



/* There was a problem with global variables, once I removed a child element
functions coudn't recognize newly created child element, even though
it had same ID as previous one, it was returning "not child element of that node"
error. 

fixed by adding local variables with the same name

*/