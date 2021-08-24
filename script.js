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

    var characterType3 = confirm("do you want to include numbes? \nPress OK for yes, Cancel for no");
    console.log(characterType3 + " characterType3 " + characterTypes + " types");
    if (characterType3 === true) {characterTypes++};

    var characterType4 = confirm("do you want to include special characters? \nPress OK for yes, Cancel for no");
    console.log(characterType4 + " characterType4 " + characterTypes + " types");
   if (characterType4 === true) {characterTypes++};
   
    console.log(characterTypes);
} // end of function

// if (characterTypes = 0) {alert("you were supposed to select at least one value. /nProgram will not run as planned")}
    enterParameters()
// I generate separate arrays of upper case letters, lower case letters, numbers, characters
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
var number1 = "0123456789";
var character1 = "!@#$%^&*"
var alpha2 = Array.from(alphabetUpper);
var alpha1 = Array.from(alphabetLower);
var number0 = Array.from(number1);
var character0 = Array.from(character1);
var ratio0 = numberOfCharacters / characterTypes; 
console.log(alpha2);
console.log(alpha1);
console.log(number0);
console.log(character0);
console.log(characterTypes);
if (characterTypes === 0) {alert("you were supposed to select at least one value. /nProgram will not run as planned")}
else {
    numberUpper = Math.floor(ratio0);
    numberNumbers = numberOfCharacters - (characterTypes - 1) * numberUpper;
    console.log(numberOfCharacters, + " , " + characterTypes + " , " + numberUpper +  " , " + numberNumbers);
}

// function getPasswordOptions {
//      var length = parseInt(prompt("How many character do you want include in your password?"), 10);  
//   }