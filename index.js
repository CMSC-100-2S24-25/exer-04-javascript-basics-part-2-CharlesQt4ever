//imports
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const validator = require("validator");

//function to generate unique id using first letter of the first name, last name, and 8 character UUID
function generateUniqueID(firstName, lastName) {
    if (!firstName || !lastName) return null;
    return `${firstName.charAt(0).toLowerCase()}${lastName.toLowerCase()}${uuidv4().replace(/-/g, "").substring(0, 8)}`;
}

//function to add account to file users.txt
function addAccount(userDetails) {
    if (userDetails.length !== 4) return false; // check if the user details had all 4 needed elements
    const [firstName, lastName, email, age] = userDetails;

    // validate user id
    if (!firstName.trim() || !lastName.trim() || !validator.isEmail(email) || age < 18) {
        return false;
    }

    try { 
        //append user details into users.txt
        fs.appendFileSync("users.txt", `${firstName},${lastName},${email},${age},${generateUniqueID(firstName, lastName)}\n`, "utf8");
        return true;
    } catch {
        return false;
    }
}

module.exports = { generateUniqueID, addAccount };
