"use strict";
function inputFunc(){
    let tempNum = document.getElementById("input_num");

    let num = document.createElement("li");

    num.textContent = tempNum.value;

    tempNum.value=null;

    document.getElementById("list_num").appendChild(num);

}