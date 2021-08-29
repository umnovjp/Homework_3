var generateBtn = document.querySelector("#generate");
function writePassword() {
   var displayMessage = prompt("How Many Characters? \nEnter a number between 8 and 128");
   numberOfCharacters = parseInt(displayMessage);
   array0 = [];
   array1 = [];
   array2 = [];
   array3 = [];
   arrayPasswordUpper = [];
   arrayPasswordLower = [];
   arrayCharacters = [];
   arrayNumbers = [];
   var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var alphabetLower = alphabetUpper.toLowerCase(); // "abcdefghijklmnopqrstuvwxyz";
   var number1 = "0123456789";
   var character1 = "!@#$%^&*";
   var alpha2 = Array.from(alphabetUpper);
   while (alpha2.length < numberOfCharacters) { alpha2 = alpha2.concat(alpha2) };
   var alpha1 = Array.from(alphabetLower);
   while (alpha1.length < numberOfCharacters) { alpha1 = alpha1.concat(alpha2) };
   var number0 = Array.from(number1);
   while (number0.length < numberOfCharacters) { number0 = number0.concat(number0) };
   var character0 = Array.from(character1);
   while (character0.length < numberOfCharacters) { character0 = character0.concat(character0) };
   // I checked if user entered a number and if number is wsithin limits
   if (isNaN(numberOfCharacters)) { alert("You did not enter a number. /nProgram will not run as expected"); }
   if (numberOfCharacters < 8) { alert("too short \nProgram will not run as expected"); }
   if (numberOfCharacters > 128) { alert("too long. \nProgram will not run as expected"); }
   // created a function to generate random letters, characters, numbers then generate a password
   characterTypes = 0;
   var characterType1 = confirm("Do you want to include lowercase letters? \nPress OK for yes, Cancel for no");
   type1 = typeof characterType1;
   console.log(characterType1 + " characterType1 " + characterTypes + " types " + type1 + "Type ");
   if (characterType1 === true) {
       characterTypes++;
       for (i = 0; i < numberOfCharacters; i++) {
           var temp = Math.random() * numberOfCharacters;
           temp = Math.floor(temp);
           array0.push(temp);
           arrayPasswordUpper.push(alpha1[temp]);
       }
   };
   var characterType2 = confirm("do you want to include UPPERCASE letters? \nPress OK for yes, Cancel for no");
   console.log(characterType2 + " characterType2 " + characterTypes + " types");
   if (characterType2 === true) {
       characterTypes++;
       for (i = 0; i < numberOfCharacters; i++) {
           var temp = Math.random() * numberOfCharacters;
           temp = Math.floor(temp);
           array1.push(temp);
           arrayPasswordLower.push(alpha2[temp]);
       }
   };
   var characterType3 = confirm("do you want to include special characters? \nPress OK for yes, Cancel for no");
   console.log(characterType3 + " characterType3 " + characterTypes + " types");
   if (characterType3 === true) {
       characterTypes++;
       for (i = 0; i < numberOfCharacters; i++) {
           var temp = Math.random() * numberOfCharacters;
           temp = Math.floor(temp);
           array2.push(temp);
           arrayCharacters.push(character0[temp]);
       }
   };
   var characterType4 = confirm("do you want to include numbers? \nPress OK for yes, Cancel for no");
   console.log(characterType4 + " characterType4 " + characterTypes + " types");
   if (characterType4 === true) {
       characterTypes++;
       for (i = 0; i < numberOfCharacters; i++) {
           var temp = Math.random() * numberOfCharacters;
           temp = Math.floor(temp);
           array3.push(temp);
           arrayNumbers.push(number0[temp]);
       }
   };
   console.log(characterTypes);
   var ratio0 = numberOfCharacters / characterTypes;
   if (characterTypes === 0) { alert("you were supposed to select at least one value. /nProgram will not run as planned") }
   else {

numberUpper = Math.floor(ratio0);
       numberNumbers = numberOfCharacters - (characterTypes - 1) * numberUpper;
   }
   arrayPasswordLower = arrayPasswordLower.slice(0, numberUpper);
   arrayPasswordUpper = arrayPasswordUpper.slice(0, numberUpper);
   arrayCharacters = arrayCharacters.slice(0, numberUpper);
   arrayNumbers = arrayNumbers.slice(0, numberNumbers);
   arrayPassword = arrayPasswordLower.concat(arrayPasswordUpper);
   arrayPassword = arrayPassword.concat(arrayCharacters);
   arrayPassword = arrayPassword.concat(arrayNumbers);
   arrayPassword = arrayPassword.sort(() => Math.random() - 0.5);
   password = arrayPassword.join();
   for (i = 0; i < password.length; i++) password = password.replace(',', '');
  
   document.getElementById("password").textContent = password;
} // end of function
generateBtn.addEventListener("click", writePassword);