const maxFrogCapacity = 15
let newFrogs = prompt("How many frogs are trying to jump in?");
let isPondOverCapacity = newFrogs <= maxFrogCapacity;
let messageToPrint =  isPondOverCapacity ? "Come on in!" : "It's too crowded!";
print(messageToPrint);
