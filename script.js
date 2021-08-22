var displayMessage = prompt("How Many Characters? \nEnter a number between 8 and 128");
var inputNumberOfCharacters = console.log("displayMessage");
var numberOfCharacters = parseFloat(displayMessage);
var choices = ['y', 'n', 'Y', 'N']; // Y and N are temporary toLowercase did not work


console.log(numberOfCharacters);
console.log(choices[0] + " " + choices[1] + " choices");
console.log(typeof numberOfCharacters);
if (console.log(typeof numberOfCharacters) !== "number") {alert("enter a number")};
// console.log(console.log(typeof numberOfCharacters));    
// var wrongEntry = alert("Enter Valid Choice. Start over");
    function enterParameters() {
    characterTypes = 0;
    var characterType1 = prompt("Do you want to include lowercase letters? \nType y for yes, n for no");
    characterType1.toLowerCase();
    type1 = typeof characterType1;
    console.log(characterType1 + " characterType1 " + characterTypes + " types " + type1 + "Type ");
    if (!choices.includes(characterType1)) {
    // wrongEntry; 
    alert("Enter Valid Choice. Start over");
    return;
    if (characterType1 == "y") {
        characterTypes = characterTypes + 1}; 
    } // end if loop 1
 
    var characterType2 = prompt("do you want to include UPPERCASE letters? \nType y for yes, n for no");
    characterType2.toLowerCase();
    console.log(characterType2 + " characterType2" + characterTypes + " types");
    if (!choices.includes(characterType2)) {
    alert("Enter Valid Choice. Start over");
    // wrongEntry;
    return;
    if (characterType2 == "y") {characterTypes++};
    } // end of loop 2

    var characterType3 = prompt("do you want to include numbes? \nType y for yes, n for no");
    console.log(characterType3 + " characterType1" + characterTypes + " types");
    // var validate2 = function() {
    if (!choices.includes(characterType3)) {
    alert("Enter Valid Choice. Start over");
    // wrongEntry;
    return;
    if (characterType3 == "y") {characterTypes++};
    } // end of loop 3

    var characterType4 = prompt("do you want to include special characters? \nType y for yes, n for no");
    console.log(characterType4 + " characterType1" + characterTypes + " types");
    // var validate2 = function() {
    if (!choices.includes(characterType4)) {
    alert("Enter Valid Choice. Start over");
    // wrongEntry;
    return;
    if (characterType4 == "y") {characterTypes++};
    } // end of loop 4

    //characterTypes = 0;
    // if (characterType1 == 'y'){
    // characterTypes++};
    // else ();
    // if (characterType2 == 'y');
    // characterTypes++;
    // else();
   
    console.log(characterTypes);
} // end of function
// }
    enterParameters()

