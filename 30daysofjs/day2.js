/* There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return True if you're better, else False! */
function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints);
    let sum=0;
    for(let i=0;i<classPoints.length;i++){
        sum += classPoints[i];
        }
        let result;
        result = sum/classPoints.length;
        return (yourPoints > result ? true : false);
    }
/* It's pretty straightforward. Your goal is to create a function that removes the first and last characters 
of a string. You're given one parameter, the original string. You don't have to worry with strings with less 
than two characters. */
function removeChar(str){
    return(str.slice(1,(str.length-1)));
    };