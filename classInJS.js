class Student {
    constructor(name, id) {
      this.name = name;
      this.id = id;
      }
    details() {
      return `Hello, my name is ${this.name} and My Id is ${this.id}.`;
    }
   
  }
  function stuDetails() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let stu1 = new Student(name, id);
    let output = document.getElementById("output");
    output.innerHTML = stu1.details();
}
  function calculateCGPA() {
    let sem1 = Number(document.getElementById("sem1").value);
    let sem2 = Number(document.getElementById("sem2").value);
    let sem3 = Number(document.getElementById("sem3").value);
    let average = (sem1 + sem2 + sem3) / 3;
    document.getElementById("average").innerHTML = "CGPA: " + average;
  }
