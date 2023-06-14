function scuberGreetingForFeet(value) {
  // Write your code here!
  if (value > 2500) {
    return "No can do.";
  } else if (value > 2000) {
    return "I will gladly take your thirty bucks.";
  } else if (value <= 400) {
    return "This one is on me!";
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
