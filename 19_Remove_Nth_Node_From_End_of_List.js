/* 
Given the head of a linked list, remove the nth node from the end of the list and return its head.
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5] 
Example 2:
Input: head = [1], n = 1
Output: []
Example 3:
Input: head = [1,2], n = 1
Output: [1]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
}
const removeNthFromEnd = function (head, n) {
    if (!head.next || n < 1) return null
    let slow = head;
    let fast = head;

    while (n > 0) {
        fast = fast.next;
        n--;
    }
    if (!fast) {
        head.val = head.next.val;
        head.next = head.next.next;
        return head
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;

    return head;
};