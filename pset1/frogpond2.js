const activities = ["babysit tadpoles","flies for lunch",  "tongue stretch", "swimming lesson"];
let userIndex = prompt("Pick a number from 0-3");
userIndex = userIndex % activities.length;
print(activities[userIndex]);

// If the user inputs 4, it should “wrap back” to 0, and print activies [0] or “babysit tadpoles”.