// Example 1: if statement
const temperature = 25;

if (temperature > 30) {
  console.log("It's a hot day!");
} else {
  console.log("It's not too hot today.");
}

// Example 2: else if statement
const hour = 15;

if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

// Example 3: ternary operator
const isRaining = true;

const weatherMessage = isRaining ? "Bring an umbrella." : "Enjoy the weather!";
console.log(weatherMessage);

// Example 4: switch statement
const dayOfWeek = "Wednesday";

switch (dayOfWeek) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Wednesday":
    console.log("It's the middle of the week.");
    break;
  case "Friday":
    console.log("It's the end of the week!");
    break;
  default:
    console.log("It's a regular day.");
}
