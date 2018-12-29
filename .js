
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



/************   Solution #4    **************************************************************************************/

function palindrome4(str) {
    // Assign a front pointer which is the index starting from the beginning of the string
    // and a back pointer  starting  at the end of the string
    let front = 0; 
    let back = str.length - 1;
    while(back > front){
        if(str[front].match(/[\W_]/)){ // If str[front] is a number or letter -> null-> false, 
            front++;   // otherwise it's true -> front++ and skip the rest of code inside the while loop
            continue;  // then continue the while loop                                         
        }
        if(str[back].match(/[\W_]/)){ 
            back--; // Decrements back pointer if current character doesn't meet criteria
            continue;
        }     
        if (str[front].toLowerCase() !== str[back].toLowerCase()){
            return false;
        }
        front++;
        back--;
    }
    // If the whole string has been compared without returning false, it's a palindrome!
    return true;
}
// This solution performs better than others as it never needs to read through the whole string 
// to know that it’s not a palindrome. It's much faster as it just makes it by looking at two letters.

console.log(palindrome('A man, a plan, a canal. Panama')); // true
console.log(palindrome('_EYE')); // true
console.log(palindrome("almostomla")); // false






// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker/
