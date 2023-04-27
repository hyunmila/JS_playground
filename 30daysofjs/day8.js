
// a = A.length
// b = b.length
// O(b+(a*sqrt(b)))
function newSequence(A,B){
    let C=[];
    let cnt={};
    for (let elem of B){ //O(b)
        if (cnt[elem]) {
            cnt[elem] += 1; 
        } else {
            cnt[elem] = 1;
        }
    }
    //O(a*sqrt(b))
    for (let i=0;i<A.length;i++){ //O(a)
        if (!(isPrime(cnt[A[i]])&&(typeof cnt[A[i]]!="undefined"))){ //O(sqrt(b))
            C.push(A[i]);
        }
    }
    return C;
}

function isPrime(num){
    if (num <= 1){
        return false;
    } 
    else {for (let i = 2; i <= Math.round(Math.sqrt(num)); i++){ //O(sqrt(num))
            if (num % i == 0){return false;}
        }
        return true;
    }
}


let A=[2,3,9,2,5,1,3,7,10];
let B=[2,1,3,4,3,10,6,6,1,7,10,10,10];
let sol=[2,9,2,5,7,10];
console.log("Szukane: ",sol);
console.log("Znalezione: ",newSequence(A,B));
