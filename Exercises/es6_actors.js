
//Exercise 2
let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"]
    },
];

// a. Who is the Academy Member whose ID is 187?
console.log("ID 187: ", academyMembers.find(m => m.memID == 187).name);

// b. Who has been in at least 3 films?
let g3 = academyMembers.filter(m => m.films.length >= 3);
g3.forEach(m => console.log(">3 films: ", m.name));

// c. Who has a name that starts with "Bob"?
let bobs = academyMembers.filter(m => m.name.startsWith("Bob"));
bobs.forEach(m => console.log("Bobs: ", m.name))

// d. HARDER: Which Academy Members have been in a film
//     that starts with "A"
function startsWithA(title){
    return title.startsWith("A");
}
function hasFilmA(member){ 
    return member.films.filter(startsWithA).length > 0;
}
function printMatch(member){
    console.log("Has > 0 films starting with A", member.name)
}
let matches = academyMembers.filter(hasFilmA);
matches.forEach(printMatch);



