//es6_cheap_candy.js Section 1-27 Page 31

//DATA
let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
]; // TODO: fill the array with 10 candies of various

//Exercise 1
// a. which candies cost less than $4.00?
products.filter(p => p.price < 4).forEach(p => console.log("<4: ", p));

// b. which candies have "M&M" as part of the name?
let mm = products.filter(p => p.product.includes("M&M"));
mm.forEach(p => console.log("M&Ms: ", p));

// c. Do we have a product called Swedish Fish? 
//     (use find (faster) or filter (more normal) ) true==yes
console.log(products.find(p => p.product == "Swedish Fish") != undefined)

