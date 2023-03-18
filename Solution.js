/* Easy 1
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal 
substring consisting of non-space characters only.
 
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5. */

//Solution:

function lengthOfLastWord(s) {
  let len = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      len++;
    } else if (len > 0) {
      return len;
    }
  }
  return len;
}

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("fly me   to   the moon"));


//=====================================================================================

/* Medium 2 

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
 
Example 1:
Input: nums = [3,2,3]
Output: [3] */

//Solution:

function Element(nums) {
    const n = nums.length;
    const freqMap = {};
    const result = [];
  
    for (let i = 0; i < n; i++) {
      freqMap[nums[i]] = (freqMap[nums[i]] || 0) + 1;
    }
  
    for (let key in freqMap) {
      if (freqMap[key] > Math.floor(n / 3)) {
        result.push(parseInt(key));
      }
    }
  
    return result;
  }
  
  console.log(Element([3, 2, 3]));
  console.log(Element([1]));
  console.log(Element([1,2]));



//===========================================================================
/* Hard 2 
You are given a string s. You can convert s to a 
palindrome by adding characters in front of it.
Return the shortest palindrome you can find by performing this transformation.
 
Example 1:
Input: s = "aacecaaa"
Output: "aaacecaaa" */

//Solution:

function shortestPalindrome(s) {
    let i = 0;
    let j = s.length - 1;
    while (j >= 0) {
      if (s[i] === s[j]) {
        i++;
      }
      j--;
    }
    if (i === s.length) {
      return s;
    }
    let str = s.substring(i);
    return str.split('').reverse().join('') + shortestPalindrome(s.substring(0, i)) + str;
  }
  
  console.log(shortestPalindrome("aacecaaa"))
  console.log(shortestPalindrome("abcd"))


//==========================================================================

/* Easy 3
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly-

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]] */

//Solution:

function PascalTriangle(numRows) {
    let res = [];
    for (let i = 0; i < numRows; i++) {
      let row = [];
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          row.push(1);
        } else {
          row.push(res[i - 1][j - 1] + res[i - 1][j]);
        }
      }
      res.push(row);
    }
    return res;
  }
  
  console.log(PascalTriangle(5));
  console.log(PascalTriangle(1));
  



  