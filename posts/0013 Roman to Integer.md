---
title: ' 13. Roman to Integer '
metaTitle: 'Roman to Integer in Javascript'
metaDesc: 'LeetCode solution Roman to Integer in javascript'
socialImage: Images/leetcode-grinding-guide.jpg
date: '2021-12-11'
tags:
  - LeetCode
  - Markdown
  - Javascript
---

## Roman numerals are represented by seven different symbols: __I, V, X, L, C, D__ and __M__.

```
Symbol      Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

For example, __2__ is written as __II__ in Roman numeral, just two one's added together. __12__ is written as XII, which is simply __X + II__. The number __27__ is written as __XXVII__, which is __XX + V + II__.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not __IIII__. Instead, the number four is written as __IV__. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as __IX__. There are six instances where subtraction is used:

* __I__ can be placed before __V (5) and X (10)__ to make __4__ and __9__. 
* __X__ can be placed before __L (50) and C (100)__ to make __40__ and __90__. 
* __C__ can be placed before __D (500) and  (1000)__ to make __400__ and __900__.

Given a roman numeral, convert it to an integer.

 
__Example 1:__
```
Input: s = "III"
Output: 3
Explanation: III = 3.
```

__Example 2:__
```
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
```

__Example 3:__
```
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

#### __Constraints:__

* __1 <= s.length <= 15__
* s contains only the characters __('I', 'V', 'X', 'L', 'C', 'D', 'M')__.
* It is guaranteed that s is a valid roman numeral in the range __[1, 3999]__.

#### __Solution:__ 

```js

/**
 * @param {string} s
 * @return {number}
 */
 const roman = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}

 const romanToInt = function(S) {

     var ans = 0

     for (var i = S.length-1; ~i; i--) {
         var num = roman[S.charAt(i)]
         if (4 * num < ans) ans -= num
         else ans += num
     }
     
     return ans
     
 };

```