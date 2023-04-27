/*Your task is to write a function maskify, which changes all but the last four characters into '#'.*/
function maskify(cc) {
    if (cc.length >= 5){
        let cc_hash = cc.substring(0,cc.length-4);
        cc = cc.substring(cc.length-4, cc.length);
        cc_hash = '#'.repeat(cc_hash.length);
        return cc_hash+cc;
        }
        return cc
    }
/* better
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}*/
/*Your task is to make a function that can take any non-negative integer as an argument and return 
it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.*/
function descendingOrder(n){
    n=String(n).split("").map((n)=>Number(n));
    n.sort((a,b)=>b-a);
    n = n.join('');
    return Number(n)
    }
/* better
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
    }*/