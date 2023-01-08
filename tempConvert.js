'use strict';

function convertTemp(){
    let t = document.getElementById("temp").value;
    t = parseFloat(t);
    let a = ((t*9)/5)+32;
    document.getElementById("temp1").value = a;
}
