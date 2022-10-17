a = 6
b = 7
console.log(a != b) //*NOT* EQUAL - in this case true
console.log(a == b) // EQUALS - in this case false

// SAME VALUES IF WE SWAP SIDES
console.log(b != a) //*NOT* EQUAL - in this case true
console.log(b == a) // EQUALS - in this case false

result = false
if(!result){ // NOT OPERATOR INVERTS THE BOOLEAN
    console.log("inside"); //this will execute because of the "not"
}
