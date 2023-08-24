/* Question: Implement a function in TypeScript that
 takes an array of numbers as input and returns the 
 sum of all the even numbers in the array.
*/

const sumEven = (arr: number[]): number => {
    let sum = 0
    arr.forEach(element => {
        if ((element % 2) === 0) {
            sum += element
        }
    });
    return sum
}
