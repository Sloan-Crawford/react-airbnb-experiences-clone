
// Map function practice
// remember, the .map method handles the for loop for us

// Challenge 1
const nums2 = [1, 2, 3, 4, 5]
// remember map takes a function as its main parameter
const squared2 = nums2.map(function(num) {
 return num * num})
console.log(squared2);

// or (with arrow function):
const nums = [1, 2, 3, 4, 5]
const squared = nums.map(num => num * num);
console.log(squared);


// Challenge 2
const names = ["alice", "bob", "charlie", "Danielle"]
const capNames = names.map(function(name) {
 let firstLetters = name.slice(0, 1).toUpperCase();
 const wholeName = firstLetters += name.slice(1, name.length + 1)
 return wholeName
})
console.log(capNames);

// or (better using index):
const uppercase = names.map((name) => {
 return name[0].toUpperCase() + name.slice(1)
})
console.log(uppercase);

// or (with template strings but it is less readable):
const uppercase2 = names.map((name) => {
 return `${name[0].toUpperCase()}${name.slice(1)}`
})
console.log(uppercase2);


// Challenge 3
// with implicit return from arrow function when on same row:
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
const pokemonP = pokemon.map(mon => `<p>${mon}</p>`)
console.log(pokemonP);

// ... this is set up to take data from an array and turn it into JSX elements that get displayed