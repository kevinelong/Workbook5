
//EXAMPLE
function isOver60(arrayValue) {
    if (arrayValue > 60) {
        return true;
    }
    else {
        return false;
    }
}
let numbers = [7, 9, 64, 60, 12, 13, 65, 62];
let firstValOver60Position = numbers.findIndex(isOver60);
// returns the index 2
if (firstValOver60Position != -1) {
    console.log("First value over 60 found at position " +
        firstValOver60Position);
}
else {
    console.log("No values over 60");
}