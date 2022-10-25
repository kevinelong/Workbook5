
// function makePerson(name, phone){
//     let instance = { // send back a new object instance using hte parameters above
//         name: name,
//         phone: phone,
//     };
//     return instance;
// }

// let p = makePerson("Kevin", "503-888-6879");
// console.log(p);

function showPerson(person){
    console.log(person.name);
    console.log(person.phone);
}

// let person = { 
//     name: 'Kevin', 
//     phone: '503-888-6879' 
// };

// showPerson(person);

//Pass in an object-literal created and then passed immediately into the function
showPerson({ name: 'Kevin', phone: '503-888-6879' });


