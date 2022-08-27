---
title: ' 24. Swap Nodes in Paris '
metaTitle: 'Swap Nodes in Paris LeetCode Solution'
metaDesc: 'LeetCode Solution'
socialImage: Images/leetcode-grinding-guide.jpg
date: '2022-08-28'
tags:
  - LeetCode
  - Markdown
  - Javascript
---

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 
__Example 1:__

![Swap Nodes in Paris](https://raw.githubusercontent.com/gurjeetsinghvirdee/leetcode-solution-in-js/master/src/Asset/swap_ex1.jpg?token=GHSAT0AAAAAABWDL6DZTGX7PYGMNCRTX2H6YYKPC2A)

```
Input: head = [1,2,3,4]
Output: [2,1,4,3]
```

__Example 2:__
```
Input: head = []
Output: []
```

__Example 3:__
```
Input: head = [1]
Output: [1]
``` 

### __Constraints:__

* The number of nodes in the list is in the range __[0, 100]__.
* __0 <= Node.val <= 100__.

### __Solutions:__

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
 * @param {ListNode} head
 * @return {ListNode}
 */

 var swapPairs = function (head) {

    const dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;

    while (current.next !== null && current.next !== undefined && current.next.next !== null) {
        let first = current.next;
        let second = current.next.next;
        first.next = second.next;
        current.next = second;
        current.next.next = first;
        current = current.next.next;
    }

    return dummy.next;
    
};

```