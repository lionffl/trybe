// Set a constant and define a number between 1 and 100 as its value

// Considering that constant a grade result from an exam test, write a condition with the follow cases using the `switch case` structure condition:

// 1) If the candidate is "Approved", print an approval message

// 2) If the candidate is "Waiting list", print a orientative message about his status

// 3) If the candidate is "Reproved", print a reproval message

let candidate = "Approved";

switch (candidate) {
    case "Approved":
        console.log("Congratulations, you are approved!")
        break;
    case "Waiting list":
        console.log("You are almost there, but you have to wait for now.")
        break;
    case "Reproved":
        console.log("You are reproved.")
        break;
    default:
        console.log("Not applicable.")
}



