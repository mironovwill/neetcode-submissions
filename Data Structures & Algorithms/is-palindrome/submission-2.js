class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const arr = s.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, "").split(' ').join('')
        let left = 0
        let right = arr.length - 1

        while(left < right){
            if(arr[left] !== arr[right]){
                 console.log(arr[left], arr[right])
                 return false
            } 
            left++
            right--
        }

        return true
    }
}
