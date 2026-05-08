class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const reverseString = (s) => s.split('').sort().reverse().join('')
        const strings = {}

        for(const str of strs){
            const revStr = reverseString(str)

            if(strings[revStr] === undefined){
                strings[revStr] = []
                strings[revStr].push(str)
            }else{
                strings[revStr].push(str)
            }
        }

        return Object.values(strings)
    }
}
