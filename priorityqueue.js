// Priority Queue
// they state the proirity of the element you passed
// element with higher priority are passed to the beginning of the queue
// if the has two element has the same priorities, they'll be ranked based on how they came in

function PriorityQueue () {
    var collection = []
    this.PrintCollection = function() {
        (console.log(collection))
    }

    this.enqueue = function(element) {
        if (this.isEmpty()) {
            collection.push(element)
        } else {
            var added = false
            for (var i = 0; i < collection.length; i++) {
                if(element[1] < collection[i][1]) {
                    collection.splice(i, 0, element)
                    added = true
                    break
                }
            }
            if (!added) {
               collection.push(element) 
            }
        }
    }

    this.dequeue = function() {
        var value = collection.shift()
        return value[0]
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

var pq = new PriorityQueue()
pq.enqueue(['code rio', [1]])
pq.enqueue(['Lynix dakay', [2]])
pq.enqueue(['datk', [3]])
pq.enqueue(['Jermmy', [2]])
pq.PrintCollection()
pq.dequeue()
pq.front()
pq.PrintCollection()