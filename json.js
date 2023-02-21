document.getElementById("loadData").addEventListener("click", function() {
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        
        document.getElementById("data").innerHTML = JSON.stringify(data);
      });
  });
  const data = { "name": "Aesha", "age": 19, "country": "India" };
  const json = JSON.stringify(data);
  
  document.getElementById("name").innerHTML=data.name;
  document.getElementById("age").innerHTML=data.age;
  document.getElementById("country").innerHTML=data.country;
  
        
