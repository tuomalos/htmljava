let str1 = prompt("Enter the first integer:");
let str2 = prompt("Enter the second integer:");
let str3 = prompt("Enter the third integer:");


let num1 = parseInt(str1, 10);
let num2 = parseInt(str2, 10);
let num3 = parseInt(str3, 10);


let sum = num1 + num2 + num3;
let product = num1 * num2 * num3;
let average = sum / 3;


let outputDiv = document.getElementById("output");


outputDiv.innerHTML = `
    <p><strong>Numbers entered:</strong> ${num1}, ${num2}, ${num3}</p>
    <p><strong>Sum:</strong> ${sum}</p>
    <p><strong>Product:</strong> ${product}</p>
    <p><strong>Average:</strong> ${average}</p>
`;