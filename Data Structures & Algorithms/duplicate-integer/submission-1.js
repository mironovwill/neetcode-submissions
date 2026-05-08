class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqueNumbers = new Set()

        for(const num of nums){
            uniqueNumbers.add(num)
        }

        return uniqueNumbers.size !== nums.length
    }
}
