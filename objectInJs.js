"use strict";
let StuObj = {
    firstName: "Aesha",
    lastName: "Makwana",
    ID: "21IT074",

    getDetails : function(){
        return ` Name: ${this.firstName} ${this.lastName} and ID: ${this.ID} `;
    } 
};
console.log(StuObj.getDetails());