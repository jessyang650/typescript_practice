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

// const reverseOrder = (input: string): string => {
//     let reversed = ''
//     for (let i = input.length - 1; i >= 0; i--) {
//         reversed += input[i]
//     }
//     return reversed
// }


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


/*
Question: Write a TypeScript function that takes an array of strings as 
input and returns a new array containing only the strings that start with 
a vowel (case-insensitive). For example, if the input array is 
["apple", "Banana", "orange", "kiwi"], the function should return ["apple", "orange"].
*/

const returnStartWithVowel = (input: string[]): string[] => {
    let startsWithVowel: string[] = []
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i <= input.length - 1; i++) {
        if (vowels.includes(input[i][0])) {
            startsWithVowel.push(input[i])
        }
    }
    return startsWithVowel
}


/*
Question: Write a TypeScript function that takes a string as input and returns 
the same string with all its words reversed. A word is defined as a sequence of 
non-space characters. For example, if the input is "Hello world, how are you?", the 
function should return "olleH ,dlrow woh era ?uoy".
*/

const reverseWords = (input: string): string => {
    const words = input.split(' ')
    let reversed = ''
    for (let i = 0; i <= words.length - 1; i++) {
        for (let j = words[i].length - 1; j >= 0; j--) {
            reversed += words[i][j]
        }
        reversed += ' '
    }
    return reversed
}


/*
Question: Write a TypeScript function that takes a number as input and returns true 
if the number is a prime number, and false otherwise. A prime number is a positive integer 
greater than 1 that has no positive divisors other than 1 and itself. For example, if the 
input is 7, the function should return true, and if the input is 10, the function 
should return false.
*/

const isPrime = (input: number): boolean => {
    if (input < 2) {
        return false
    }
    for (let i = 2; i < input; i++) {
        if (input % i === 0) {
            return false
        }
    }
    return true
}

/*
Problem Statement:
You are given an array of integers, and your task is to implement a function that 
returns the sum of all the even numbers in the array. Write a TypeScript function 
called sumOfEvenNumbers that takes an array of integers as input and returns the 
sum of all the even numbers in the array.
*/

const sumOfEvenNumbers = (input: number[]): number => {
    let sum = 0
    input.forEach(element => {
      if (element % 2 === 0) {
        sum += element
      }  
    })
    return sum
}

/*
Problem Statement:
You are given a string containing a list of numbers separated by commas. Your task is 
to implement a function that calculates the sum of these numbers. Write a TypeScript function 
called calculateSum that takes a string of comma-separated numbers as input and returns their 
sum as a number.
*/

const calculateSum = (input: string) => {
    const numbers = input.split(',') // numbers is an array of strings
    let sum = 0
    numbers.forEach(element => {
      sum += parseInt(element)
    })
    return sum
}

/* Problem Statement:
You are given an array of numbers. Your task is to implement a function that finds and 
returns the maximum number in the array. Write a TypeScript function called findMax that 
takes an array of numbers as input and returns the maximum number in the array.
*/

const findMax = (input: number[]): number => {
    if (input.length === 0) {
        throw new Error('Input array is empty')
    }
    let max = input[0]
    input.forEach(e => {
        if (e > max) {
            max = e
        }
    })
    return max
}

/* Problem Statement:
You are given a string containing a sentence. Your task is to implement a function that 
counts the number of words in the sentence. A word is defined as a sequence of characters 
separated by spaces. Write a TypeScript function called countWords that takes a string as 
input and returns the number of words in the sentence.
*/

const countWords = (input: string): number => {
    const count = input.split(' ')
    return count.length
}

/* Problem Statement:
You are given a sorted array of integers. Your task is to implement a function that searches 
for a target integer in the array using binary search. If the target integer is found, return 
its index; otherwise, return -1. Write a TypeScript function called binarySearch that takes 
a sorted array of integers and a target integer as input and returns the index of the target 
integer in the array or -1 if it's not found.
*/

const binarySearch = (input: number[]): number => {
    let start = 0
    let end = input.length - 1
    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        if (input[mid] === target) {
            return mid
        } else if (input[mid] < target) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return -1
}

/* Problem Statement:
You are given an array of integers. Your task is to implement a function that 
finds and returns the index of the first occurrence of a specific target integer 
in the array. If the target integer is not found, return -1. Write a TypeScript function 
called findFirstOccurrence that takes an array of integers and a target integer 
as input and returns the index of the first occurrence of the target integer in the 
array or -1 if it's not found.
*/

const findFirstOccurrence = (input: number[], target: number): number => {
    for (let i = 0; i <= input.length - 1; i++) {
        if (input[i] === target) {
            return i
        }
    }
    return -1
}