const LinkedList = require('../global-linked-list')

LinkedList.prototype.hasLoop = function (no) {
    let first = this.head, second = this.head
    while (first != null && second != null && second.next != null) {
        first = first.next;
        second = second.next.next;
        if (first == second) {
            return true;
        }
    }
    return false
}

LinkedList.prototype.makeloop = function (pos) {
    let indexNode = null;
    if (pos < 1) {
        indexNode = null;
    }
    let current = this.head;
    let index
    for (index = 1; current.next != null; index++) {
        if (index === pos) {
            indexNode = current;
        }
        current = current.next;
    }
    if (index === pos) indexNode = current;
    current.next = indexNode;
}

const process = (array, target) => {
    let list
    // list = new LinkedList(1)
    for (let i = 0; i < array.length; i++) {
        if (i === 0) list = new LinkedList(array[i]);
        else {
            list.append(array[i]);
        }
    }

    list.printList()
    list.makeloop(target)
    console.log(list.hasLoop(target));
}

process([1, 3, 4], 2)

process([1, 8, 3, 4], 0)