---
title: ' 14. Longest Common Prefix'
metaTitle: 'Longest Common Prefix in Javascript'
metaDesc: 'LeetCode solution Longest Common Prefix in javascript'
socialImage: Images/leetcode-grinding-guide.jpg
date: '2021-12-11'
tags:
  - LeetCode
  - Markdown
  - Javascript
---

### Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string __""__.

 
__Example 1:__
```
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

__Example 2:__
```
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

### __Constraints:__

* __1 <= strs.length <= 200__
* __0 <= strs[i].length <= 200__
* __strs[i]__ consists of only lower-case English letters.

### __Solution:__

__JavaScript__

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
 const longestCommonPrefix = function(strs) {
    if (strs.length === 0) {return ""}
    if (strs.length === 1) {return strs[0]}
    var prefix = ""
    for (var i = 0; i < strs[0].length; i++) {
        for (var j = 1; j < strs.length; j++) {
            if (strs[j][i] === strs[0][i]) {
                continue
            } else {
                return prefix
            }
        }
        prefix += strs[0][i]
    }
    
    return prefix
};
```
