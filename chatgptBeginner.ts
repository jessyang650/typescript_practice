/* Question: Implement a function in TypeScript that
 takes an array of numbers as input and returns the 
 sum of all the even numbers in the array.
*/

const sumEven = (arr: number[]): number => {
    let sum = 0
    arr.forEach(e => {
        if (e % 2 === 0) {
            sum += e
        }
    });
    return sum
}


/*
Question: Implement a function in TypeScript that takes a 
string as input and returns the string in reverse order. 
For example, if the input is "hello", the function should return "olleh".
*/

const reverseOrder = (input: string): string => {
    let reversed = ''
    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i]
    }
    return reversed
}


/*
Question: Write a TypeScript function that takes an array of numbers 
as input and returns a new array containing only the unique elements 
from the original array, while maintaining the original order. 
For example, if the input is [1, 2, 3, 2, 4, 3], the function should return [1, 2, 3, 4].
*/

const returnUnique = (input: number[]): number[] => {
    const unique: number[] = []
    for (let i = 0; i <= input.length - 1; i++) {
        if (!unique.includes(input[i])) {
            unique.push(input[i])
        }
    }
    return unique
}


/*
Question: Write a TypeScript function that takes an array of strings as 
input and returns a new array containing only the strings that have a 
length greater than a specified value. For example, if the input array 
is ["apple", "banana", "grape", "kiwi"] and the specified length is 5, 
the function should return ["banana"].
*/

const lengthGreaterThan1 = (input: string[], value: number) => {
    let greaterThan: string[] = []
    for (let i = 0; i <= input.length - 1; i++) {
        if (input[i].length > value) {
            greaterThan.push(input[i])
        }
    }
    return greaterThan
}

const lengthGreaterThan2 = (input: string[], value: number) => {
    return input.filter(e => e.length > value)
}


/*
Question: Write a TypeScript function that takes a string as input and 
returns the string with all its vowels replaced by the letter 'x'. For 
example, if the input is "hello world", the function should return "hxllo wxrld".
*/

const replaceVowels1 = (input: string): string => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let replaced = ''
    for (let i = 0; i <= input.length - 1; i++) {
        if (vowels.includes(input[i])) {
            replaced += 'x'
        } else {
            replaced += input[i]
        }
    }
    return replaced
}

const replaceVowels2 = (input: string): string => {
    let newString = input
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < newString.length; i++) {
        if (vowels.includes(newString[i])) {
            newString = newString.replace(newString[i], 'x')
        }
    }
    return newString
}