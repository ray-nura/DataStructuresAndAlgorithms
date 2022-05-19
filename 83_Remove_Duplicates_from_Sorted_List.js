/* 
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
Input: head = [1,1,2]      Output: [1,2]
Input: head = [1,1,2,3,3]  Output: [1,2,3]
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head || !head.next) return head;

    let current = head;
    let nextNode = null;

    while (current) {
        nextNode = current.next;

        while (nextNode && current.val === nextNode.val) {
            nextNode = nextNode.next
        }
        current.next = nextNode;
        current = nextNode;
    }
    return head;
};
