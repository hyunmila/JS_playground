/* Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value. */
function sumArray(array) {
    if (array == null || array.length <2){
        return 0;
    }
    else {
        let min_elem = Math.min(...array);
        let max_elem = Math.max(...array);
        let sum = 0;
        for (var elem of array){
            sum += elem
        }
        sum = sum-min_elem-max_elem;
        return sum;
        }
    }
/* best
function sumArray(array) {
    array = array || [];
    return array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((a, b) => a + b, 0);
}*/
/* You're writing code to control your town's traffic lights. You need a function to handle each change from green, 
to yellow, to red, and then to green again.
Complete the function that takes a string as an argument representing the current state of the light and returns a 
string representing the state the light should change to.*/
function updateLight(current) {
    return(current==='green'?'yellow':(current==='yellow'?'red':'green'));
    }
/* Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.*/
const quarterOf = (month) => {
    return(1<=month&&month<=3?1:(4<=month&&month<=6?2:(7<=month&&month<=9?3:4)))
    }
/* better:
const quarterOf = m => Math.ceil(m/3);*/