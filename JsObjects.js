const car = {
    isFuelType: "Petrol",
    isType: "Luxury",
    isBrand: "Audi",
    display() {
        document.write(`<h2>Call by Object</h2>this car uses ${this.isFuelType}, type is ${this.isType} and brand is
    ${this.isBrand}<br>`);
    }, 
    };
    console.log(car.display())
    function GetDetail(Diesel, SUV, Tata) {
    this.isFuelType = Diesel;
    this.isType = SUV;
    this.isBrand = Tata;
    this.display = function () {
    document.write(`<h2>Call by Constructor</h2>this car uses ${this.isFuelType}, type is ${this.isType} and brand is
    ${this.isBrand}`);
    } 
    };
    let ans = new GetDetail("Diesel","Hatchback","BMW")
    console.log(ans.display());