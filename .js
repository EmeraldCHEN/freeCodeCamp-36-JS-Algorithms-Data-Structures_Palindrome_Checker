
/************   Solution #1    **************************************************************************************/

function palindrome(str) {
    let arr = str.toLowerCase().split("");
    arr = arr.filter(x => /[a-zA-Z0-9]/.test(x));
    let count = 0;
    for(let i = 0; i <= (arr.length - i - 1); i++){
        if(arr[i] == arr[arr.length - i - 1]){
          count++;
        }                   
    }
    if(count == arr.length/2 || count == (arr.length + 1)/2 ){
      return true;
    }else{
      return false;
    }  
}
palindrome("eye"); // return true;



/************   Solution #2    **************************************************************************************/

function palindrome2(str) {
    
    let strLowerCase = str.replace(/[\W_]/g, '').toLowerCase(); // Uses regular expressions to replace any white space or non-alphanumeric characters with nothing (or null), 
                                                                // which essentially removes them from the string
                                                                // then chains .toLowerCase() to remove any capital letters
    let reversedStrLowerCase = strLowerCase.split('').reverse().join(''); 
    
    return strLowerCase === reversedStrLowerCase; // Checks if the string is the same forwards and backwards
}



/************   Solution #3    **************************************************************************************/

function palindrome3(str) {
  
  str = str.toLowerCase().replace(/[\W_]/g, "");
  let len = str.length - 1;
  for(let i = 0; i < len/2; i++){ // Sets i is greater than the length of the string divided by two, which tells the loop to stop after the halfway point of the string
    if(str[i] !== str[len-i]){
      return false;
    }
  }
  return true;
}





// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker/
