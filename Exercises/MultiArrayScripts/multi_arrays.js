// Exercise 1, Section 1-35 PAGE 39
let lockerAndAccessCode = [
    ["Locker 1", 135],
    ["Locker 2", 159],
    ["Locker 3", 642]
];

// What do you think these will output? Make a prediction before running the code.
console.log(lockerAndAccessCode[2][1]);
console.log(lockerAndAccessCode[1]);

//index out of range as there is no third value on the inner lists, 
//  yields undefined
console.log(lockerAndAccessCode[2][2]);
