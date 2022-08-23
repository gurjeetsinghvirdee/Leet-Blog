---
title: ' 4. Median of Sorted Arrays '
metaTitle: ' Median of Sorted Arrays in Javascript'
metaDesc: 'LeetCode solution Median of Sorted Arrays in javascript'
socialImage: Images/leetcode-grinding-guide.jpg
date: '2021-12-11'
tags:
  - LeetCode
  - Markdown
  - Javascript
---

## Given two sorted arrays __nums1__ and __nums2__ of size __m__ and __n__ respectively, return the median of the two sorted arrays.

The overall run time complexity should be __O(log (m+n))__.

__Example 1:__

```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```

__Example 2:__

```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
``` 

#### __Constraints:__

* __nums1.length == m__
* __nums2.length == n__
* __0 <= m <= 1000__
* __0 <= n <= 1000__
* __1 <= m + n <= 2000__
* __-106 <= nums1[i], nums2[i] <= 106__

#### __Solution:__

__JavaScript__

```js

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

 const findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    var m = nums1.length;
    var n = nums2.length;
    var start = 0;
    var end = m;

    while (start <= end) {
        const partitionNums1 = Math.floor((start + end) / 2);
        const partitionNums2 = Math.floor((m + n + 1) / 2) - partitionNums1;
        const maxLeftNums1 = partitionNums1 == 0 ? Number.MIN_SAFE_INTEGER : nums1[partitionNums1 - 1];
        const minRightNums1 = partitionNums1 == m ? Number.MAX_SAFE_INTEGER : nums1[partitionNums1];
        const maxLeftNums2 = partitionNums2 == 0 ? Number.MIN_SAFE_INTEGER : nums2[partitionNums2 - 1];
        const minRightNums2 = partitionNums2 == n ? Number.MAX_SAFE_INTEGER : nums2[partitionNums2];
        if (maxLeftNums1 <= minRightNums2 && maxLeftNums2 <= minRightNums1) {
            if ((m + n) % 2 == 0) {
                return (Math.max(maxLeftNums1, maxLeftNums2) + Math.min(minRightNums1, minRightNums2)) / 2.0;
            } else {
                return Math.max(maxLeftNums1, maxLeftNums2);
            }
        }
        else if (maxLeftNums1 > minRightNums2) {
            end = partitionNums1 - 1;
        }
        else {
            start = partitionNums1 + 1;
        }
    }
};

```
