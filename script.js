function calculate(){

let math = parseInt(document.getElementById("math").value);
let science = parseInt(document.getElementById("science").value);
let english = parseInt(document.getElementById("english").value);
let computer = parseInt(document.getElementById("computer").value);

let total = math + science + english + computer;
let percentage = total / 4;

let grade;

if(percentage >= 90)
grade = "A+";

else if(percentage >= 75)
grade = "A";

else if(percentage >= 60)
grade = "B";

else if(percentage >= 50)
grade = "C";

else
grade = "Fail";

document.getElementById("result").innerHTML =
"Total: " + total + "<br>Percentage: " + percentage + "%<br>Grade: " + grade;

}
