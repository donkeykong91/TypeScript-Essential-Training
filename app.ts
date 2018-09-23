var animal = {

    name: "Fido",

    species: "Dog",

    age: 5,

    speak: function() {

        console.log("Woof!");

    }

}

function calculateAge(birthYear) {

    return Date.now() - birthYear;

}