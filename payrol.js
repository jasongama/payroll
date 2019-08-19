
var addButton= document.querySelector(".solve_salary")

function solve_salarys(){
    var emp_name = document.getElementById("emp_name").value;
    var daily_rate = document.getElementById("daily_rate").value;
    var no_days_work = document.getElementById("no_days").value;

    gross_pay= parseFloat(daily_rate) * no_days_work;
    results = "Employee's Name : " + emp_name + ".";
    results2 ="Basic Salary : Php " + gross_pay.toFixed(2)+".";

    document.getElementById("example").innerHTML = results;
    document.getElementById("example2").innerHTML = results2;
}
addButton.addEventListener("click", solve_salarys)
