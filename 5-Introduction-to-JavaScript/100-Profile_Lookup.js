//Created Profile lookup program to specify parts of an array as input and check each of the elements to see if that part applies

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
  for (var i = 0; i < contacts.length; i++) {
    if (name === contacts[i].firstName && contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
    }
    else if (name === contacts[i].firstName && !contacts[i].hasOwnProperty(prop)){

        return "No such property";
    }
  }
        return "No such contact";


// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
