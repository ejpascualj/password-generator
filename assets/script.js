// 1. DEFINITION OF GLOBAL VARIABLES
// Quert Selector
var generateBtn = document.querySelector("#generate");

var CharacterTypes = ["Upper", "Lower", "Num", "Spec"];
var CharacterNames = ["uppercase letters", "lowercase letters", "numbers", "special characters"];
var CharacterSelected = [false, false, false, false];

Availables = {
  Upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "H", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  Lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "h", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  Num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  Spec: [" ", "!", "&quot;", "#", "$", "%", "&", "'", "(", ")", "*", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "\\", "[", "]", "^", "`", "|", "_", "{", "}", "~"]
};

var PasswordLength = 0;


function writePassword() {
  // 2. Inputs and validity review
  window.alert("Welcome to the Password Generator!");
  // 2.1. Password Length
  var PasswordLength = window.prompt("Please indicate the number of characters of the password between 8 and 128");
  while (PasswordLength < 8 || PasswordLength > 128) {
    PasswordLength = window.prompt("Please indicate the number of characters of the password between 8 and 128");
  }

  var PasswordText = new Array(parseInt(PasswordLength));
  PasswordLength = PasswordText.length;

  // 2.2. Password Character Types  
  for (var i = 0; i < CharacterSelected.length; i++) {
    CharacterSelected[i] = window.confirm("do yo require " + CharacterNames[i]);
    console.log(CharacterSelected[i]);
  }

  if (CharacterSelected === [false, false, false, false]) {
    window.alert("Selected character types are less than allowed! Try again.");
  } else {
    window.alert("Characters were succesfully selected!");
  }

  var k = 0;
  for (var i = 0; i < CharacterSelected.length; i++) {
    if (CharacterSelected[i]) {
      PasswordText[k] = Availables[CharacterTypes[i]][Math.floor(Math.random() * Availables[CharacterTypes[i]].length)];
      console.log(PasswordText[k]);
      k++;
    }
  }

  // 3. Password Generator 
  for (var j = k; j < PasswordText.length; j++) {
    RandomType = Math.floor(Math.random() * CharacterSelected.length);
    if (CharacterSelected[RandomType]) {
      if ((RandomType === 0) && CharacterSelected[0]) {
        //uppercase      
        RandomCharacter = Math.floor(Math.random() * Availables[CharacterTypes[RandomType]].length);
        SelectedEl = Availables[CharacterTypes[RandomType]][RandomCharacter];
        PasswordText[j] = SelectedEl;
        console.log(SelectedEl);
      } else if ((RandomType === 1) && CharacterSelected[1]) {
        //lowercase      
        RandomCharacter = Math.floor(Math.random() * Availables[CharacterTypes[RandomType]].length);
        SelectedEl = Availables[CharacterTypes[RandomType]][RandomCharacter];
        PasswordText[j] = SelectedEl;
        console.log(SelectedEl);
      } else if ((RandomType === 2) && CharacterSelected[2]) {
        //numbers      
        RandomCharacter = Math.floor(Math.random() * Availables[CharacterTypes[RandomType]].length);
        SelectedEl = Availables[CharacterTypes[RandomType]][RandomCharacter];
        PasswordText[j] = SelectedEl;
        console.log(SelectedEl);
      } else if ((RandomType === 3) && CharacterSelected[3]) {
        //special characters      
        RandomCharacter = Math.floor(Math.random() * Availables[CharacterTypes[RandomType]].length);
        SelectedEl = Availables[CharacterTypes[RandomType]][RandomCharacter];
        PasswordText[j] = SelectedEl;
        console.log(SelectedEl);
      }
    } else {
      j--;
    }
  }
  
  var PasswordString = PasswordText.join("");
  window.alert("Your Password: " + PasswordString)
  var password = document.querySelector("#password");
  password.value = PasswordString;
}

// 4. EVENT LISTENER
generateBtn.addEventListener("click", writePassword);