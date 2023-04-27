/* Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 
Be careful, there shouldn't be a space at the beginning or the end of the sentence! */
function smash (words) {
    let result = "";
    for (let i = 0; i < words.length; i++){
        if (i<1){
            result = result + words[i];
        }
        else {
            result = result + " " + words[i];
        }
        }
        return result
    };
/* better:
smash = function (words) {
    return words.join(" ");
    }; */

/* In this simple assignment you are given a number and have to make it negative. 
But maybe the number is already negative? */
    function makeNegative(num) {
        if (num>0){
          num = num * -1;
        }
            return num;
    };
/* better:
    function makeNegative(num) {
        return -Math.abs(num);
    }; */

/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
Return the resulting string.
Note: input will never be an empty string. */
    function fakeBin(x){
        let n=[];
        for (let i=0;i<x.length;i++){
            n[i]=x[i];
            }
            x='';
            for (let i=0;i<n.length;i++){
            if (n[i]<5){
                n[i]='0';
            }
            else{
                n[i]='1';
            }
            x+=n[i];
            }
            return x;
        };
/* better:
    function fakeBin(x) {
        return x.replace(/\d/g, d => d < 5 ? 0 : 1);
        } */
        
