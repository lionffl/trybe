const readline = require('readline-sync');

const weight = readline.questionFloat("What's your weight? (e.g. 50)");
const height = readline.questionFloat("What's your height? (e.g. 1.7)");

const bmi = weight / (height * height);


const bmiGrade = (bmi) => {
 if (bmi < 18.5) return 'Lower weight'
 if (bmi >= 18.5 && bmi <= 24.9) return 'Normal weight'
 if (bmi >= 25 && bmi <= 29.0) return 'Overweight'
 if (bmi >= 30 && bmi <= 34.9) return 'Obesity degree 1'
 if (bmi >= 35 && bmi <= 39.9) return 'Obesity degree 2'
 return 'Obesity degree 3 & 4'
};

const result = `Your BMI is ${bmiGrade(bmi)}`;

module.exports = result;