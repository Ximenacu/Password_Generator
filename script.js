// Assignment code here
special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
numbers= "0123456789"
alphabet = "abcdefghijklmnopqrstuvwxyz"
alphabetUpr="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var content =[special,numbers,alphabet,alphabetUpr];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  // criteria: Special char, numeric, lower case, uppercase. 
   var characters = window.prompt("Input the number of characters you want your password to be:");

   if (characters<8 || characters>128){
     window.alert("Please choose a password of at least 8 caracters and maximum 128 characters.");
     characters = window.prompt("Input the number of characters you want your password to be:");
   }

  var criteria=[4];
  criteria[0] = window.confirm("Would you like to include special characters in your password?");
  if (criteria[0]==true){
    window.alert("Please keep in mind that a special character may be a space ' ' and can be included in your password.");
  }
  criteria[1] = window.confirm("Would you like to include numeric characters in your password?");
  criteria[2] = window.confirm("Would you like to include lowercase characters in your password?");
  criteria[3] = window.confirm("Would you like to include uppercase characters in your password?");
  console.log("criteria",criteria);

  if (criteria[0]==false&&criteria[1]==false&&criteria[2]==false&&criteria[3]==false){
    window.alert("Please select at least one of the character types to create your password.");
    criteria[0] = window.confirm("Would you like to include special characters in your password?");
    criteria[1] = window.confirm("Would you like to include numeric characters in your password?");
    criteria[2] = window.confirm("Would you like to include lowercase characters in your password?");
    criteria[3] = window.confirm("Would you like to include uppercase characters in your password?");
    console.log("criteria",criteria);
  }

  var password= new Array(characters);
  var j=0;
  for (h=0;h<characters;h++){
    for (i=0;i<4;i++){
      if (criteria[i]==true){
        password[j]=content[i][Math.floor(Math.random() * content[i].length)];
        j++;
      }
      if (j==characters){
        break
      }
    }
    i=0;
    if (j==characters){
      break
    }
  }

  password=password.sort(function () {
    return Math.random() - 0.5;
  });
  console.log("Password",password);

// Here is where i have problems:

    // var password = generatePassword();
    // var passwordText = document.querySelector("#password");
  //  passwordText.value = password;

 
  password=password.join(",")
  var passwordfinal=password.split(",").join('')

  document.getElementById('password').innerHTML=passwordfinal;
  
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
