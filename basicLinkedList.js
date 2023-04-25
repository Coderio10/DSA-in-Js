// Basics of linked List 
// Data structure where values are chained sequentially 
// More efficient for insertion/deletion than arrays
// Does not require contiguous memory addressing
// Composed of nodes that contain a stored value and a reference to the next node.
// types: double linked list, single linked list, dummy head linked list

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    append(val) {
        if(this.head === null) {
            this.head = new Node(val)
            return
        }

        let curr = this.head
        while(curr.next !== null) {
            curr = curr.next
        }
        curr.next = new Node(val)
    
    }

    print() {
        let str = ""
        let curr = this.head
        while (curr !== null) {
            str += curr.val + ' -> '
            curr = curr.next
        }
        console.log(str)
    }  
    
    contains(target) {
        let curr = this.head

        while (curr !== null) {
            if (curr.val === target) {
                return true
            }
            curr = curr.next
        }
        return false
    } 
}

const list = new LinkedList()
list.append('a')
list.append('b')
list.append('c')
list.append('d')
list.print()
console.log(list.contains('r'))
console.log(list.contains('d'))