
function calculate(){

    alert("Function is running");

let principle = parseFloat(document.getElementById("principle").value);

let interestRate = parseFloat(document.getElementById("interestRate").value);

let time = parseFloat(document.getElementById("time").value);

let interest = principle * (interestRate/100) * time;

let total = principle + interest;

document.getElementById("results").innerHTML= `
<p> With a beginning principle of $${principle} and with a growth rate of ${(interestRate/100).toFixed(2)}% 
for ${time} years, your total interest will be ${interest} with a grand total of ${total}.</p>
`
}
