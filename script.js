var displayMessage = prompt("How Many Characters? \nEnter a number between 8 and 128");
// var inputNumberOfCharacters = displayMessage;
//.inputNumberOfCharacters.toString();
// var stringMessage = String(dispayMessage);
numberOfCharacters = parseInt(displayMessage);
var choices = ['y', 'n', 'Y', 'N']; // Y and N are temporary toLowercase did not work
// I checked if user entered a number and if number is 
console.log(numberOfCharacters);
var type1 = typeof numberOfCharacters
console.log(type1);
if (type1 !== "number") {alert("You did not enter a number. /nProgram will not run as expected");}
if (numberOfCharacters < 8) {alert("too short \nProgram will not run as expected");}
if (numberOfCharacters > 128) {alert("too long. \nProgram will not run as expected");}
// var wrongEntry = alert("Enter Valid Choice. Start over");
    function enterParameters() {
    characterTypes = 0;
    var characterType1 = confirm("Do you want to include lowercase letters? \nPress OK for yes, Cancel for no");
    // characterType1.toLowerCase();
    type1 = typeof characterType1;
    console.log(characterType1 + " characterType1 " + characterTypes + " types " + type1 + "Type ");
    if (characterType1 === true) {
        characterTypes++}; 
 
    var characterType2 = confirm("do you want to include UPPERCASE letters? \nPress OK for yes, Cancel for no");
    // characterType2.toLowerCase();
    console.log(characterType2 + " characterType2 " + characterTypes + " types");
    if (characterType2 === true) {characterTypes++};

    var characterType3 = confirm("do you want to include numbes? \nType y for yes, n for no");
    console.log(characterType3 + " characterType3 " + characterTypes + " types");
    if (characterType3 === true) {characterTypes++};

    var characterType4 = confirm("do you want to include special characters? \nType y for yes, n for no");
    console.log(characterType4 + " characterType4 " + characterTypes + " types");
   if (characterType4 === true) {characterTypes++};
   
    console.log(characterTypes);
} // end of function
// }
    enterParameters()

// function getPasswordOptions {
//      var length = parseInt(prompt("How many character do you want include in your password?"), 10);  
//   }