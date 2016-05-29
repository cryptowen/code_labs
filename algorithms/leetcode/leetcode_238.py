#!/usr/bin/env python
# -*- coding: UTF-8 -*-
'''
Author      : Hu Wenchao
Description :
'''


class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        result = []
        n = len(nums)
        f = 1
        print nums
        for i in range(n):
            result.append(f)
            f *= nums[i]
        f = 1
        print result
        for i in range(n - 1, -1, -1):
            result[i] = result[i] * f
            f *= nums[i]
        return result

# [1, 2, 3, 4]
# [1, 1, 1*2, 1*2*3]

# [2*3*4, 1*3*4, 1*2*4, 1*2*3]

s = Solution()
print s.productExceptSelf([1, 2, 3, 4])
# [24,12,8,6]
