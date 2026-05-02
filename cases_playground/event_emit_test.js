import EventEmitter from "events"

const eventEmitter1 = new EventEmitter()
const eventEmitter2 = new EventEmitter()

const eventAListener = (message) => {
    console.log("Emitter1 EventA received:", message)
}

eventEmitter1.on("EventA", eventAListener)

eventEmitter1.on("EventA", (message) => {
    console.log("Emitter1 EventA wants to print one more time:", message)
})

eventEmitter1.off("EventA", eventAListener)

eventEmitter1.on("EventB", (message) => {
    console.log("Emitter1 EventB received:", message)
})

eventEmitter2.on("EventA", (message) => {
    console.log("Emitter2 EventA received:", message)
})

eventEmitter2.on("EventB", (message) => {
    console.log("Emitter2 EventB received:", message)
})

eventEmitter1.emit("EventA", "Hello from Emitter1 EventA")
eventEmitter1.emit("EventB", "Hello from Emitter1 EventB")
eventEmitter2.emit("EventA", "Hello from Emitter2 EventA")
eventEmitter2.emit("EventB", "Hello from Emitter2 EventB")