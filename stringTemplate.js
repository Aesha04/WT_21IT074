"use strict";

function msg(){
    const n = document.getElementById("name").value;
    let str = `Welcome to CHARUSAT, ${n}`;
    document.getElementById("idMsg").textContent=str;
}