export default function addThirdContent(){
    let div3 = document.createElement("div");
    let placeHolder = document.getElementById("content");
    div3.id = "content-nested";
    div3.classList.add("div1");
    placeHolder.appendChild(div3);
    
    
    let mainText = document.createElement("p");
    div3.appendChild(mainText);
    mainText.innerText = "chulazmej94@askjeeves.com"
    };

