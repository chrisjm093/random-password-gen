var passwordLength = 0,
      lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
      uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      numeric = [1,2,3,4,5,6,7,8,9,0],
      specialChar = ['!','@','#','$','%','^','&','*','(',')','+','.','?','<','>'],
      button = document.getElementById('generate');
      textArea = document.getElementById( 'password' )

function passwordInitiation() {

      function isPasswordLengthCorrect( passwordLength ) {
      
    return passwordLength >= 8 && passwordLength <=128;
      }
    
  //validate that their response is between 8 and 128
  while (! isPasswordLengthCorrect( passwordLength )) {
    if ( passwordLength === null) {
      break;
    }
    
    // prompt the user for the length of the password that they want to generate
      passwordLength = prompt( 'Provide a desired password length between 8 and 128 characters.' );
      
    } 
    //If user chooses to generate a code but then hits cancel at the prompt, function will be killed.
    if ( passwordLength === null){
      return;
    }
  //prompt user for a series of configuration options, lowercase, uppercase, numeric, and/or special characters this is an object
  var options = {
    'passwordLength': passwordLength, 
    'lowercase': confirm('Would you like lowercase letters in your password?'),
    'uppercase': confirm ('Would you like upper case letters in your password?'),
    'numeric' : confirm ('Would you like numbers in your password?'),
    'specialChar': confirm('Would you like special characters in your password?')
    };
    
  //generate password
  textArea.value = generatePassword( options );
}

// based on user choices in option object, run through each array and concat into one super array, 
function generatePassword( options ){
    
    var password = '',
        possibleCharacters = [],
        requiredCharacters = [];

    if( options.lowercase ) {
      possibleCharacters= possibleCharacters.concat( lowercase );
      
      requiredCharacters.push( lowercase[ Math.floor( Math.random() * lowercase.length) ] );
    }
    
    if ( options.uppercase ) {
      possibleCharacters = possibleCharacters.concat( uppercase );
      
      requiredCharacters.push( uppercase[ Math.floor( Math.random() * uppercase.length) ] );
    }

    if ( options.numeric ) {
      possibleCharacters = possibleCharacters.concat( numeric );

      requiredCharacters.push( numeric[ Math.floor( Math.random() * numeric.length) ] );
    }

    if ( options.specialChar ) {
      possibleCharacters = possibleCharacters.concat( specialChar );

      requiredCharacters.push( specialChar[ Math.floor( Math.random() * specialChar.length) ] );
    }
    
//generate a series of random numbers based on the user's defined password length
  for (var i = 0; i < options.passwordLength ; i++) {
      if ( requiredCharacters[i] ) {
        password += requiredCharacters[i];

      }
      password += possibleCharacters[ Math.floor( Math.random() * possibleCharacters.length)]
  
      }
  return password;
  }


button.addEventListener( "click", passwordInitiation)
