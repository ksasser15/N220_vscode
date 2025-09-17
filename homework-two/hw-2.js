//Question 1
let ticketNum = 3;
let ticketCost = 14;
let ttCost = ticketNum * ticketCost;

document.getElementById("ticketNum").textContent = "Tickets: " + ticketNum;

document.getElementById("ticketCost").textContent = "Cost: $" + ticketCost;

document.getElementById("ttCost").textContent = "Total: $" + ttCost;


//Question 2 

let bankAccount = 235.87;
let shirt = 35;
let pants = 75;
let shoes = 60;

let outfitCost = shirt + pants + shoes;
let totalRemaining = bankAccount - outfitCost

document.getElementById("bank").textContent = "Total Remaining: $" + totalRemaining;

let jacket = 70;
let enoughFunds = totalRemaining >= jacket;

let jacketID = document.getElementById("addJacket");

if(enoughFunds){
    jacketID.textContent = "I have enough funds";
}else{
    jacketID.textContent = "I do not have enough funds";
}

//Question 3

let pizzasBought = 4;
let studentSlices = 2.5;
let slicePerPizza = 8;

let totalSlices = pizzasBought * slicePerPizza;// Output 32
let studentsFed = Math.floor(totalSlices / studentSlices); //Output 12.8 
let leftOverPizza = totalSlices - (studentsFed * studentSlices);

let pizzaID = document.getElementById("profPizza");
let leftOverSliceID = document.getElementById("leftOverSlices");

pizzaID.textContent = studentsFed + " students will be fed";
leftOverSliceID.textContent = leftOverPizza + " slices left over for Professor Rector";


//Question 4
let adult = 12;
let child = 6;
let drinks = 1.5;

let adultReceipt = 2;
let childReceipt = 1;
let drinksReceipt = 3;

let receiptTotal = (adult * adultReceipt) + (child * childReceipt) + (drinks * drinksReceipt);//Output: 34.5

let montyId = document.getElementById("Monty");

montyId.textContent = "Total: $" + receiptTotal;

//Question 5

let week1 = 202.45;
let week2 = 134.97;
let week3 = 256.63;
let week4 = 178.22;

let weeklyAverage = (week1+week2+week3+week4)/4;


let tipsId = document.getElementById("tip");

tipsId.textContent = "Weekly Average: $" + weeklyAverage;

console.log(tipsId.textContent = "Weekly Average: $" + weeklyAverage);

