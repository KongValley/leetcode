/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0;

  let arr = []

  for(let i =0 ;i<s.length;i++) {
    if(!arr.includes(s[i])) {
      arr.push(s[i])
      // console.log('arr push : ',arr);
      if(max<arr.length) {
        max = arr.length
      }
    }else {
      arr = arr.slice(arr.indexOf(s[i])+1,arr.length)
      arr.push(s[i])
      // console.log('arr slice: ', arr);
    }
  }
  return max;
};

// console.log(lengthOfLongestSubstring('abcabcbb'));
// console.log(lengthOfLongestSubstring('bbbbbb'));
// console.log(lengthOfLongestSubstring('pwwkew'));
// console.log(lengthOfLongestSubstring("abcabcbb"));