---
title: ' 2. Add Two Numbers '
metaTitle: 'Add Two Numbers in Javascript'
metaDesc: 'LeetCode Solution in javascript'
socialImage: Images/leetcode-grinding-guide.jpg
date: '2021-12-11'
tags:
  - LeetCode
  - Markdown
  - Javascript
---

### You are given two __non-empty__ linked lists representing two non-negative integers. The digits are stored in __reverse order__, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number __0__ itself.

### __Example 1:__

![Add Two Number](https://raw.githubusercontent.com/gurjeetsinghvirdee/leetcode-solution-in-js/master/src/Asset/addtwonumber1.jpg)

```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

__Example 2:__
```
Input: l1 = [0], l2 = [0]
Output: [0]
```

__Example 3:__
```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
``` 

### __Constraints:__
* The number of nodes in each linked list is in the range __[1, 100]__.
* __0 <= Node.val <= 9__
* It is guaranteed that the list represents a number that does not have leading zeros.

### __Solution:__

__JavaScript__

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 const addTwoNumbers = function (l1, l2) {
    var head = null;
    var temp = null;
    var carry = 0;
    while (l1 !== null || l2 !== null) {
        var sum = carry;
        if (l1 != null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 != null) {
            sum += l2.val;
            l2 = l2.next;
        }

        var node = new ListNode(Math.floor(sum) % 10);
        carry = Math.floor(sum / 10);
        if (temp == null) {
            temp = head = node;
        }

        else {
            temp.next = node;
            temp = temp.next;
        }
    }

    if (carry > 0) {
        temp.next = new ListNode(carry);
    }

    return head;
};
```
