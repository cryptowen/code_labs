# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        dummyHead = ListNode(0)
        preNode = dummyHead
        carry = 0
        while l1 is not None and l2 is not None:
            num = (l1.val or 0) + (l2.val or 0) + carry
            carry = num / 10
            curNode = ListNode(num % 10)
            preNode.next = curNode
            preNode = curNode
            if l1 is not None:
                l1 = l1.next
            if l2 is not None:
                l2 = l2.next
        if carry:
            preNode.next = ListNode(1)
        return dummyHead.next

s = Solution()
s.
