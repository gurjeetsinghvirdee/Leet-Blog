---
title: ' 1. Two Sum '
metaTitle: 'Two Sum LeetCode Solution'
metaDesc: 'LeetCode Solution in Javascript'
socialImage: Images/leetcode-grinding-guide.jpg
date: '2021-12-11'
tags:
  - LeetCode
  - Markdown
  - Javascript
---

### Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

#### You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

__Example 1:__
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

__Example 2:__
```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

__Example 3:__
```
Input: nums = [3,3], target = 6
Output: [0,1]
```

### __Constraints:__

* __2 <= nums.length <= 104__
* __-109 <= nums[i] <= 109__
* __-109 <= target <= 109__
* Only one valid answer exists.
 

### __Follow-up:__ Can you come up with an algorithm that is less than __O(n2)__ time complexity?

### __Solution:__

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (array, goal) => {
    let indexes = [];

    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if(array[i] + array[j] === goal) {
                indexes.push(i);
                indexes.push(j);
            }
        }
    }

    return indexes;
}
```