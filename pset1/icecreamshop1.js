const priceOfIceCream = 6;
let paymentRecieved = prompt("Pay");
let isPaymentEnough = paymentRecieved >= priceOfIceCream

if (isPaymentEnough) {
    print("Amount charged: " + priceOfIceCream + "\nThanks! Enjoy the Ice Cream!"); // \n for new line
} else {
    print("Not enough cash!");
}