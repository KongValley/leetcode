/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

// let headNode = new ListNode(0)

// let currentNode = headNode

// console.log('headNode :', headNode);
// console.log('currentNode :', currentNode);

// currentNode.next = new ListNode(5)

// console.log('添加新节点');
// console.log('headNode :', headNode);
// console.log('currentNode :', currentNode);

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {

  let flag = 0

  let headNode = new ListNode(0) // 保存头节点

  let currentNode = headNode // 负责给头节点添加next

  while(l1||l2) {
    let l1Cur = l1 ? l1.val : 0
    let l2Cur = l2 ? l2.val : 0

    let sum = l1Cur + l2Cur + flag

    flag = Math.floor(sum/10)

    currentNode.next = new ListNode(sum%10)

    if(l1) l1 = l1.next
    if(l2) l2 = l2.next

    currentNode = currentNode.next
  }

  if(flag) currentNode.next = new ListNode(flag)

  return headNode.next
};
