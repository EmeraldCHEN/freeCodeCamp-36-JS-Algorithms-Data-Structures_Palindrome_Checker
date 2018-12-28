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

function palindrome(str) {
      let strLowerCase = str.replace(/[\W_]/g, '').toLowerCase();
      let reversedStrLowerCase = str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
      return strLowerCase === reversedStrLowerCase;
}










// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker/
