const LinkedList = require('../global-linked-list')

LinkedList.prototype.reverse = function () {
    let current = this.head, prev = null, next = null, i = 0;
    this.head = null;
    if (this.size === 1) this.head = current;
    else {
        next = current.next;
        while (next !== null) {
            prev = current;
            current = next;
            next = current.next;
            current.next = prev;
            if (i === 0) prev.next = null;
            i = 1;
        }
        this.head = current;
    }

}

const process = (array) => {
    let list
    // list = new LinkedList(1)
    for (let i = 0; i < array.length; i++) {
        if (i === 0) list = new LinkedList(array[i]);
        else {
            list.append(array[i]);
        }
    }

    list.printList()
    list.reverse()
    list.printList()
}

process([1, 2, 3, 4, 5, 6])
process([2, 7, 8, 9, 10])
