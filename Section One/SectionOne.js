// Section One: JS

// Part A: 5-random-7
const random5 = () => {
    return 1 + Math.random() * 6;
  }


// Part B: reverse-a-string
// Solution 1: use built-in methods to reverse then join characters
let string = "hello"

const reverseString = (string) => {
  return string.split("").reverse().join("");
};
// Time: O(N) - each built in method needs to loop through array one time 
// Space: O(N) - .join() and .split() both creates a new array of "n" length


// Solution 2: two pointer method. switch characters in place from opposite sides until they meet in the middle 
var reverse = function(s) {
    s = s.split("")
    let left = 0;
    let right = s.length-1;

    while (left < right) {
    
        let temp = s[left];          
        s[left] = s[right];         
        s[right] = temp;
    
        left++;  
        right--;
    }
    return s.join("");
};
// Time: O(N)
// Space: O(N) - would be O(1) if the initial input was a string instead of an array