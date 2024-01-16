// Q-234 in leetcode

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
  }
  
  const printList = (head) => {
    let current = head;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
  };
  
  var isPalindrome = function(head) {
    if (head === null || head.next === null) return true;
  
    let [slow, fast] = [head, head];
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
  
    slow.next = reverse(slow.next);
    slow = slow.next;
  
    let dummy = head;
    while (slow !== null) {
        if (dummy.val !== slow.val) return false;
        dummy = dummy.next;
        slow = slow.next;
    }
  
    return true;
  };
  
  var reverse = (head) => {
    let [curr, prev] = [head, null];
    while (curr !== null) {
        const nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev;
  };
  
  const testPalindrome = () => {
    const palindromeList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(2, new ListNode(1))))));
  
    console.log("Original Palindrome List:");
    printList(palindromeList);
  
    const resultPalindrome = isPalindrome(palindromeList);
    console.log("Is Palindrome:", resultPalindrome);
    console.log("----------------------------");
  
    const nonPalindromeList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  
    console.log("Original Non-Palindrome List:");
    printList(nonPalindromeList);
  
    const resultNonPalindrome = isPalindrome(nonPalindromeList);
    console.log("Is Palindrome:", resultNonPalindrome);
  };
  
  testPalindrome();
  