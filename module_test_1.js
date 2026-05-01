
let test3 = require('./module_test_3')

console.log(`test1 printing: ${test3}`)
console.log(`${test3}`)
console.log(test3)

let hello = "I want to say hello to you"
let target = "you"
let secret = "Leila"

module.exports = {
    hello,
    target
}