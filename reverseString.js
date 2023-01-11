function reverseString() {
    let n = document.getElementById("str");
    let input = n.value;
    let reversedStr = input.split('').reverse().join('');
    document.getElementById("output").innerHTML = reversedStr;
  }