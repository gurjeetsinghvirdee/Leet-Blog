---
title: ' 20. Valid Parantheses '
metaTitle: 'Valid Parantheses LeetCode Solution'
metaDesc: 'Valid Parantheses Solution in different languages'
socialImage: Images/leetcode-grinding-guide.jpg
date: '2022-08-27'
tags:
  - LeetCode
  - Markdown
  - Javascript
---

### Given a string __s__ containing just the characters __'(', ')', '{', '}', '[' and ']'__, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
 

__Example 1:__
```
Input: s = "()"
Output: true
```

__Example 2:__
```
Input: s = "()[]{}"
Output: true
```

__Example 3:__
```
Input: s = "(]"
Output: false
```

### __Constraints:__
  
* __1 <= s.length <= 104__  
* __s__ consists of parentheses only __'()[]{}'.__

### __Solutions:__

__JavaScript__

```js

/**
 * @param {string} s
 * @return {boolean}
 */

 const isValid = function(s) {

    let stack = [];
    let len = s.length;
    let map = {
      '(': ')',
      '[': ']',
      '{': '}'
    };

    for (let i = 0; i < len; i++) {
      if (stack.length > 0 && map[stack[stack.length - 1]] === s[i]) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }

    return stack.length == 0;
    
  };

```
