// data for all exercises:
let cart = [
    { item: "Bread", price: 3.29, quantity: 2 },
    { item: "Milk", price: 4.09, quantity: 1 },
    { item: "T-Bone Steak", price: 12.99, quantity: 2 },
    { item: "Baking Potato", price: 1.89, quantity: 6 },
    { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
    { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
    { item: "Apples", price: 0.66, quantity: 6 }
];

// a. use the .map() method to return only the name of each object, then .foreach() to log the name.
function getName(objectElement){
    return objectElement.item;
}
function showText(text){
    console.log("showText:", text);
}

let stringList = cart.map(getName);
stringList.forEach(showText);


// b. use the .reduce() method to calculate the total cost for all items. quantity * price
function getTotalCost(runningTotal, arrayElement){
    return runningTotal + (arrayElement.price * arrayElement.quantity)
}
console.log("Reduced Summary:", cart.reduce(getTotalCost, 0)); //start at 0 for reduce

//console.log(cart.reduce((total, o) => total + (o.price * o.quantity), start));

// c. like a. but sort the list before displaying it.
function compareAB(a, b){
    if(a.item < b.item){
        return -1
    }else if(a.item > b.item){
        return 1;
    }
    return 0; //must be equal
}
cart.sort(compareAB)
let stringList2 = cart.map(getName);
stringList2.forEach(showText) 
