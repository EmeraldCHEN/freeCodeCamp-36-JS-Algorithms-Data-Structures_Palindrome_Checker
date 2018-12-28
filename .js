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
