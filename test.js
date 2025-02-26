const { generateUniqueID, addAccount } = require("./index");

// test generateUniqueID
console.log("Test generateUniqueID:");
console.log(generateUniqueID("Alan", "Turing"));
console.log(generateUniqueID("Tim", "Berners-Lee"));

// test addAccount
console.log("\nTest addAccount:");
const user1 = ["Alan", "Turing", "aturing@w3c.com", 58];
const user2 = ["Ted", "Nelson", "ted.n@w3c.com", 43];
const user3 = ["Charles", "", "malingemail", 14];

console.log(addAccount(user1)); // true
console.log(addAccount(user2)); // true
console.log(addAccount(user3)); // false
