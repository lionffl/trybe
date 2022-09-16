// Define a constant named "currentHour" and set a value between 4 and 24

// Define a variable named "message"

// Define a condition considering the follow:

// 1) Higher or equal to 22, print the variable "message" with the value "Sleeping time, should not eat." 

// 2) Higher or equal to 18 but lower than 22, print the variable "message" with the value "Dinner time, time to eat!" 

// 3) Higher or equal to 14 but lower than 18, print the variable "message" with the value "We coud eat a piece of cake and coffee now." 

// 4) Higher or equal to 11 but lower than 14, print the variable "message" with the value "Lunch time!" 

// 5) Higher or equal to 4 but lower than 11, print the variable "message" with the value "Did you smell that? must be breakfast hour." 

const currentHour = 2;

let message = '';

if (currentHour >= 22) {
    message = "Sleeping time, should not eat.";
}

else if (currentHour >= 18 && currentHour < 22) {
    message = "Dinner time, time to eat!.";
}

else if (currentHour >= 14 && currentHour < 18) {
    message = "We coud eat a piece of cake and coffee now."; 
}

else if (currentHour >= 11 && currentHour < 14) {
    message = "Lunch time!"; 
}

else if (currentHour >= 4 && currentHour < 11) {
    message = "Did you smell that? must be breakfast hour.";
}
else {
    message = "Zzzz.";
}

console.log(message);

// Define a condition using a variable named weekDay and the operator ||

let weekDay = "monday";

if (weekDay === "monday" || weekDay === "tuesday" || weekDay === "wednesday" || weekDay === "thursday" || weekDay === "friday") {
    console.log("One more day learning to code at trybe :)")
} else {
    console.log("Time to rest :)")
}
