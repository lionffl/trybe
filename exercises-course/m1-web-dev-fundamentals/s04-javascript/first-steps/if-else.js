// Set a constant and define a number between 1 and 100 as its value

// Considering that constant a grade result from an exam test, define a condition with the follow cases:

// 1) If the grade is higher or equal to 80, print "Approved."

// 2) If the grade is lower than 80 but higher than 60, print "You are in our waiting list"

// 3) If the grade is lower than 60, print "Try again, too low grade."

const grade = 59;

if (grade >= 80) {
    console.log("Approved");
}
else if (grade < 80 && grade >= 60) {
    console.log("You are in our waiting list")
}
else {
    console.log("Try again, too low grade.")
}

