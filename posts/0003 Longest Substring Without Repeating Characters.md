---
title: ' 3. Longest Substring Without Repeating Characters'
metaTitle: 'Longest Substring Without Repeating Charactersin Javascript'
metaDesc: 'LeetCode solution Longest Substring Without Repeating Characters in javascript'
socialImage: Images/leetcode-grinding-guide.jpg
date: '2021-12-11'
tags:
  - LeetCode
  - Markdown
  - Javascript
---

### Given a string __s__, find the length of the longest substring without repeating characters.
 
__Example 1:__
```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

__Example 2:__
```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

__Example 3:__
```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
``` 

#### __Constraints:__

* __0 <= s.length <= 5 * 104__
* __s__ consists of English letters, digits, symbols and spaces.

#### __Solution:__

__JavaScript__

```js
/**
 * @param {string} s
 * @return {number}
 */

 const lengthOfLongestSubstring = function (s) {
     
    if (!s) {
        return 0;
    }
    
    var start = 0;
    
    var end = 0;
    
    var maxLength = 0;
    
    var uniqueCharacters = new Set();
    
    while (end < s.length) {
        if (!uniqueCharacters.has(s[end])) {
            uniqueCharacters.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueCharacters.size);

        } else {
            uniqueCharacters.delete(s[start]);
            start++;
        }
    }

    return maxLength;
    
};
```
