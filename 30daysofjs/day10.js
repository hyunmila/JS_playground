/* 1. Test function and create input/output data sets, describe
which cases this data set will test:
Function description:
Find the length of the longest substring without repeating characters in the given string `s`.
Examples:
Input: s = "abcabcbb"           Output: 3
Explanation: The answer is "abc"/"bca"/"cab", with the length of 3.
Input: s = "bbbbb"              Output: 1
Explanation: The answer is "b", with the length of 1.*/

function longestSubstring(str){
    str = str.toLowerCase();
    let result=0;
    for (let id in str){
        let visited=[];
        for (let i=id;i<str.length;i++){
            if (!(visited[str.charCodeAt(i)]==true)){
                result = Math.max(result, i-id+1);
                visited[str.charCodeAt(i)]=true;
            }
            else{
                break;
            }
        }
    }
    console.log(str, result);
    return result;
    
    // return result.length;
}

console.log(longestSubstring("abcabcbb"))   //3
// console.log(longestSubstring("bbbbb"))      //1
// console.log(longestSubstring("abcgdccd"))   //5
console.log(longestSubstring("AbdFgaAgqwertyuio"))