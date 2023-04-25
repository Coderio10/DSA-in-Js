// Queue
// first in, first out, and vice versa

function Queue() {
    collection = []

    this.print = function() {
        console.log(collection)
    }

    // enqueue pushes the first item unto the queue
    this.enqueue = function(element) {
        collection.push(element)
    }

    // dequeue takes the first item off the queue and returns it
    this.dequeue = function() {
        return collection.shift()
    }

    // returns the first item of the queue without removing it
    this.front = function() {
        return collection[0]
    }

    // returns the size of the queue
    this.size = function() {
        return collection.length
    }

    // Check if the queue is empty 
    this.isEmpty = function() {
        return (collection.length === 0)
    }

}

let Q = new Queue()
Q.enqueue('a')
Q.enqueue('b')
Q.enqueue('c')
Q.print()
Q.dequeue()
console.log(Q.front())
Q.print()