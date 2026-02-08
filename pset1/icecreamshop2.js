const conesSoldPerHour = 14;
const conesInventory = 200
let inventoryLeft = conesInventory;

for(let hour = 1; hour <= 12; hour++) {
    print(conesSoldPerHour * hour + " sold at hour " + hour)
    inventoryLeft -= conesSoldPerHour;
    print(inventoryLeft + " left");
}