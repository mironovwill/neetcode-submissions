class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counter = {}

        for(let num of nums){
            if(counter[num] === undefined) counter[num] = 0
            counter[num]++
        }

        const arr = Object.entries(counter).sort((a, b) => b[1] - a[1]).map(el => el[0])
        return arr.splice(0, k)
    }
}
