
import { promisify } from "node:util"

// function doubleAfter2Seconds(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof num !== 'number') {
//                 reject(new Error('Input must be a number'))
//             } else {
//                 console.log('Doubling the number after 1 second...')
//                 resolve(num * 2)
//             }
//         }, 1000)
//     })
// }

// console.log('Before calling the function')
// const result = await doubleAfter2Seconds('5')
// console.log('Result:', result)

const customPromise = (num, callback) => {
    setTimeout(() => {
        if (typeof num !== 'number') {
            callback(new Error('Input must be a number'), null)
        } else {
            console.log('Tripling the number after 1 second...')
            callback(null, num * 3)
        }
    }, 1000)
}

const customPromiseAsync = promisify(customPromise)

try {
    const result = await customPromiseAsync('5')
    console.log('Result:', result)
} catch (err) {
    console.error('Error:', err.message)
}


// customPromise('5', (err, result) => {
//     if (err) {
//         console.error('Error:', err.message)
//     } else {
//         console.log('Result:', result)
//     }
// })