---
title: ' 27. Remove Element '
metaTitle: 'Remove Element LeetCode Solution'
metaDesc: 'LeetCode Solutions'
socialImage: Images/leetcode-grinding-guide.jpg
date: '2022-08-28'
tags:
  - LeetCode
  - Markdown
  - Javascript
---

Given an integer array __nums__ and an integer val, remove all occurrences of val in __nums__ in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array __nums__. More formally, if there are __k__ elements after removing the duplicates, then the first __k__ elements of __nums__ should hold the final result. It does not matter what you leave beyond the first __k__ elements.

Return __k__ after placing the final result in the first __k__ slots of __nums__.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with __O(1)__ extra memory.

__Custom Judge:__

The judge will test your solution with the following code:

```
int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
```
If all assertions pass, then your solution will be accepted.

 
__Example 1:__
```
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

__Example 2:__
```
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
``` 

### __Constraints:__

* __0 <= nums.length <= 100__
* __0 <= nums[i] <= 50__
* __0 <= val <= 100__


### __Solution:__

__JavaScript__ 

```js

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

 const removeElement = function (nums, val) {
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }

    return count;

 }

```
