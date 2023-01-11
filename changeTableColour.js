let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let currentColorIndex = 0;

function changeTableColor() {
    let table = document.getElementById("myTable");
    let colorInput = document.getElementById("colorInput").value;
    let color = colors[colorInput - 1];
    table.style.backgroundColor = color;
}