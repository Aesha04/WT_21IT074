"use script";

let n1 = document.getElementById("num1");
let n2 = document.getElementById("num2");
let ans = document.getElementById("result");

document.getElementById("add").addEventListener("click", function () {
    ans.value = parseInt(n1.value) + parseInt(n2.value);
});

document.getElementById("sub").addEventListener("click", function () {
    ans.value = parseInt(n1.value) - parseInt(n2.value);
});

document.getElementById("mul").addEventListener("click", function () {
    ans.value = parseInt(n1.value) * parseInt(n2.value);
});

document.getElementById("div").addEventListener("click", function () {
    ans.value = parseInt(n1.value) / parseInt(n2.value);
});