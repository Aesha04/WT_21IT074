// function Car(fuelType, carType, brand) {
//     this.fuelType = fuelType;
//     this.carType = carType;
//     this.brand = brand;

//     this.isFuelType = function(type) {
//       return this.fuelType === type;
//     };

//     this.isType = function(type) {
//       return this.carType === type;
//     };

//     this.isBrand = function(brand) {
//       return this.brand === brand;
//     };
//   }

//   function checkCarDetails() {
//     let fuelType = document.getElementById("fuelType").value;
//     let carType = document.getElementById("carType").value;
//     let brand = document.getElementById("brand").value;

//     let myCar = new Car(fuelType, carType, brand);

//     let fuelTypeCheck = myCar.isFuelType(fuelType);
//     let carTypeCheck = myCar.isType(carType);
//     let brandCheck = myCar.isBrand(brand);

//     let displayText = "Fuel Type Check: " + fuelTypeCheck + " Car Type Check: " + carTypeCheck + " Brand Check: " + brandCheck;
//     document.getElementById("carCheckResult").innerHTML = displayText;
//   }

// let car1 ={
//   isFuelType(){
//     this.fuel = document.getElementById("fuelType")
//     document.getElementById("carFuel").value = fuel;
//   },
  
  // isType(){

  // },
  // isBrand(){

  // }

// }
const car = {
  fuel: document.getElementById("fuelType"),
  type: document.getElementById("carType"),
  fullName: function () {
    document.getElementById("carFuel").value=this.fuel;
    document.getElementById("car").value=this.type;
  }
}