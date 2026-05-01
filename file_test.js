
const os = require('os')
const path = require('path')
const fs = require('fs')

let path1 = path.join('./content', 'text1.txt')
let path2 = path.join('./content', 'text2.txt')
// console.log(path1)
// console.log(path2)

let text1 = fs.readFile(path1, 'utf-8', (err, data) => {
    console.log(`text1-callback data: ${data}`)
    if (err) {
        console.log('text1 error:')
        console.log(err)
    }
})
let text2 = fs.readFile(path2, 'utf-8', (err, data) => {
    console.log(`text2-callback data: ${data}`)
    if (err) {
        console.log('text2 error:')
        console.log(err)
    }
})
console.log(`text1: ${text1}`)
console.log(`text2: ${text2}`)

fs.writeFile(
    path.join('./content', 'text3.txt'), 
    `This is text3, including: ${os.EOL}- ${text1}${os.EOL}- ${text2}${os.EOL}`, 
    { flag: 'w' },
    (err, data) => {
        if (data) {
            console.log('I am printing the data message!')
            console.log(data)
        }
        if (err) {
            console.log('I am printing the error message!')
            console.log(err)
        }
    },
)



// let test1 = require('./module_test_1')
// let test2 = require('./module_test_2')
// // console.log(this)
// console.log(test1)
// console.log(test2)
// // console.log(require('./module_test_1'))

// // console.log(module)

// // console.log(__dirname)
// // // setTimeout(() => {
// //     console.log('hello')
// // }, 1000)

// // setInterval(() => {
// //     console.log('hi')
// // }, 1000)

// console.log(os.userInfo())
// console.log(os.devNull)

// console.log(path.sep)
// console.log(path.join('/content', 'subfolder', 'test.txt'))
// console.log(__dirname)

// let path1 = path.join(__dirname, 'content', 'subfolder', 'test.txt')
// let path2 = path.resolve('content', 'subfolder', 'test.txt')
// console.log(path1)
// console.log(path2)
// console.log(path1 === path2)