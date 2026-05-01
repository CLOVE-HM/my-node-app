const { set } = require("lodash");

setTimeout(() => {
    console.log('4. setTimeout callback executed after 0 milliseconds');
    setTimeout(() => {
        console.log('11. setTimeout: setTimeout callback executed after 0 milliseconds');
    }, 0);

    setImmediate(() => {
        console.log('9. setTimeout: setImmediate callback executed');
    });

    process.nextTick(() => {
        console.log('5. setTimeout: process.nextTick callback executed');
    });
}, 0);

setImmediate(() => {
    console.log('6. setImmediate callback executed');
    setTimeout(() => {
        console.log('13. setImmediate: setTimeout callback executed after 0 milliseconds');
    }, 0);

    setImmediate(() => {
        console.log('12. setImmediate: setImmediate callback executed');
    });

    process.nextTick(() => {
        console.log('7. setImmediate: process.nextTick callback executed');
    });
});

process.nextTick(() => {
    console.log('2. process.nextTick callback executed');
    setTimeout(() => {
        console.log('10. process.nextTick: setTimeout callback executed after 0 milliseconds');
    }, 0);

    setImmediate(() => {
        console.log('8. process.nextTick: setImmediate callback executed');
    });

    process.nextTick(() => {
        console.log('3. process.nextTick: process.nextTick callback executed');
    });
});

console.log('1. This will be printed immediately');