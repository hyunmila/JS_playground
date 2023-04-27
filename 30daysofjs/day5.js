/* A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z 
at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.*/
function isPangram(string){
    string = string.toLowerCase();
    arr = string.split(" ");
    letters = []
    for (let elem of arr){
        letters+=elem
        }
        asciiTab = [];
        let ac = 0
        for (let letter of letters){
        ac = letter.charCodeAt(letter);
        if (!asciiTab.includes(ac)){
            if (ac>96){
            asciiTab.push(ac);}
            }
        }
        temp = []
        for (let j=97;j<123;j++){
        temp.push(j)
        }
        return (asciiTab.length===temp.length)
    }
    
/*
function isPangram(string){
    const str = string.replace(/[^a-zA-Z]/gi,'').toLowerCase()
    const set = new Set([...str]);
    return set.size === 26;
}*/