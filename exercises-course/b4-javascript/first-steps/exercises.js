// Write 5 "programs" for arithmetic operations

const a = 10;
const b = 5;
const c = 30;
let result = 0;

// +

result = a + b;
console.log(result);

// -

result = a - b;
console.log(result);

// *

result = a * b;
console.log(result);

// /

result = a / b;
console.log(result);

// %

result = a % b;
console.log(result);

// Compare two numbers and return the higher one

result = a>b === true;

if (result) {
    result = a;
    console.log(result);
} else {
    result = b;
    console.log(result); 
}

// Compare three numbers and return the higher one

result = a>b === true;
console.log(result);

if (!result && b > c) {
    result = b;
    console.log(result);
}

else if (!result && b < c) {
    result = c;
    console.log(result);
}

else if (result && a > c) {
    result = a;
    console.log(result);
}
else if (result && a < c) {
    result = c;
    console.log(result);
} 

// Check if a number is positive, negative or zero

result = a>0 === true;

if (a<0) {
    console.log("Negative.")
}
else if (result) {
    console.log("Positive")
} else { console.log("Zero.") }

// Check if const x, y and z are triangle angles

const x = 50;
const y = 50;
const z = 80;

result = x + y + z === 180;

switch (result) {
    case true:
        console.log("Yes, this is a triangle");
        break;
    case false:
        console.log("This is not a triangle");
        break;
    default:
        console.log("Not applicable.")
}

// Write a "program" that ignores case sensitive

let chessPiece = "biSHop";

if (chessPiece.toLocaleLowerCase() === "bishop") {
    console.log("Diagonals.")
}

// Write a "program" that return grades following these rules:

// Grades are related to a proportion of right answers.

// If >= 90% -> A
// If >= 80% -> B
// If >= 70% -> C
// If >= 60% -> D
// If >= 50% -> E
// If < 50% -> F

// If lower than 0 ou higher than 100, return an error

let rightAnswerRatio = 80;
result = rightAnswerRatio >= 0;

if (!result || rightAnswerRatio > 100) {
    console.log("Error.")
}

else if (rightAnswerRatio >= 90) {
    result = "A";
    console.log(result);
}

else if (rightAnswerRatio >= 80) {
    result = "B";
    console.log(result);
}

else if (rightAnswerRatio >= 70) {
    result = "C";
    console.log(result);
}

else if (rightAnswerRatio >= 60) {
    result = "D";
    console.log(result);
}

else if (rightAnswerRatio >= 50) {
    result = "E";
    console.log(result);
}

else if (rightAnswerRatio < 50) {
    result = "F";
    console.log(result);
}

// Check numbers a, b and c and if one of them are even, return true.

result = (a % 2) + (b % 2) + (c % 2) === 0;
console.log(result);

// Check numbers a, b and c and if one of them are odd, return true.

result = (a % 2) + (b % 2) + (c % 2) === 0;
console.log(!result);

// 

let productCost = 5;
let productSaleValue = 10;
let tax = 0.2;
let productCostTaxed = productCost / (1-tax);
let profit = productSaleValue - productCostTaxed;
let salesResult = 1000;
let errorCheck = productCost >= 0 && productSaleValue >= 0 && tax >= 0;

if (!errorCheck) {
    console.log("Invalid input data.")
} else {
    console.log(profit*salesResult)
}

// IR & INSS exercise 

// Data & Variables

let salaryGross = 3000;
let salaryAfterSocial = 0;
let taxRatio = 1;
let taxQuota = 0;
let salaryNet = 0;

// Social Contribution Tiers (INSS)

const socialTierD = 1556.94;
const socialTierC = 2594.92;
const socialTierB = 5189.82;
const socialTierA = 5189.83;

// Tax Tiers (IR)

const taxTierE = 1903.98;
const taxTierD = 2826.65;
const taxTierC = 3751.05;
const taxTierB = 4664.68;
const taxTierA = 4664.69;

// Social Contribution Ratio (INSS)

const socialContrRatioTierD = 0.08;
const socialContrRatioTierC = 0.09;
const socialContrRatioTierB = 0.11;
const socialContrRatioTierA = 570.88; // absolute number, not a percentage.

// Tax Ratio (IR)

const taxRatioTierE = 0; // absolute number, not a percentage.
const taxRatioTierD = 0.075;
const taxRatioTierC = 0.15;
const taxRatioTierB = 0.225;
const taxRatioTierA = 0.275;

// Tax Quota (IR)

const taxQuotaTierD = 142.8;
const taxQuotaTierC = 354.8;
const taxQuotaTierB = 636.13;
const taxQuotaTierA = 869.36;

// Checking Social Tier Contribution Ratio

if (salaryGross <= socialTierD) {
    salaryAfterSocial = salaryGross - (salaryGross*socialContrRatioTierD)
}

else if (salaryGross >= socialTierA) {
    salaryAfterSocial = salaryGross - socialContrRatioTierA;
}

else if (salaryGross > socialTierC && salaryGross <= socialTierB) {
    salaryAfterSocial = salaryGross - (salaryGross*socialContrRatioTierB)
}

else if (salaryGross >= socialTierD && salaryGross <= socialTierC) {
    salaryAfterSocial = salaryGross - (salaryGross*socialContrRatioTierB)
}

console.log (`Salary After Social: ${salaryAfterSocial}.`) // Debug check

// Checking Tax Ratio & Quota

if (salaryAfterSocial <= taxTierE) {
    taxRatio = taxRatio;
}

else if (salaryAfterSocial >= taxTierA) {
    taxRatio = taxRatioTierA;
    taxQuota = taxQuotaTierA;
}

else if (salaryAfterSocial > taxTierC && salaryAfterSocial <= taxTierB) {
    taxRatio = taxRatioTierB;
    taxQuota = taxQuotaTierB;
}

else if (salaryAfterSocial > taxTierD && salaryAfterSocial <= taxTierC) {
    taxRatio = taxRatioTierC;
    taxQuota = taxQuotaTierC;
}

else if (salaryAfterSocial > taxTierE && salaryAfterSocial <= taxTierD) {
    taxRatio = taxRatioTierD;
    taxQuota = taxQuotaTierD;
}

console.log (`Tax Quota: ${taxQuota}.`) // Debug check
console.log (`Tax Ratio: ${taxRatio}.`) // Debug check

// Calculating Net Salary

if (taxRatio === 1) { // IR free check
    salaryNet = salaryAfterSocial;
} else { salaryNet = salaryAfterSocial - ((salaryAfterSocial * taxRatio)-taxQuota) }

console.log(salaryNet);
