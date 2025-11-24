/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isAnagram(str1,str2){
     if(str1.length != str2.length) return false;
     let j = str1.length -1;
     for(let i =0;i<str1.length;i++){
        if(str1[i] != str2[j]) return false;
        j--;
    }
    return true;
}
console.log(isAnagram('sust','tsus'));
console.log(isAnagram('sus','sus'));
console.log(isAnagram('aaa','aabb'));
console.log(isAnagram('aadd','ddaa'));
console.log(isAnagram('sasas','asasasa'));
