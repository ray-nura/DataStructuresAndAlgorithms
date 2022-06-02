// Tag Identification Number
// You're given a string containing a list of digits. 
// You must make as many IDs of the format 8xxxxxxxxxx 
// (an 8 followed by 10 digits) as possible. 
// Return the number of IDs you can make. The IDs do not have to be unique, 
// and you may rearrange the digits, but you may only use each digit once.


function numOfIds(pool) {
    // Write your code here
    if (pool.length === 0) return '0'
    if (pool.length < 11) return '0';
    let tid = Math.floor(pool.length / 11)
    let count = 0;
    for (let i = 0; i < pool.length; i++) {
        if (pool[i] === "8") {
            count++
        }
    }
    if (tid < count) return tid
    if (tid > count) return count
    if (tid === count) return count

}
// Compiled successfully 11 / 12 test cases passed