
let numOfDiceStr = prompt("How many dice do you want to roll?");


let numOfDice = parseInt(numOfDiceStr, 10);


let sum = 0;


for (let i = 0; i < numOfDice; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;


    sum += roll;
}


document.getElementById("target").innerHTML = `You rolled ${numOfDice} dice. The total sum is: <strong>${sum}</strong>.`;


console.log(`Sum of the ${numOfDice} dice rolls is: ${sum}`);