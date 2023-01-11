function calculateAge() {
    let birthdate = new Date(document.getElementById("date").value);
    let today = new Date();

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();
    if (days < 0) {
        days += 30;
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }
    if (months === 0 && days === 0 && today.getDate() < birthdate.getDate()) {
        years--;
    }
    document.getElementById("age").innerHTML = "Your age is: " + years + " Yrs, " + months + " Months, " + days + " Days.";
}