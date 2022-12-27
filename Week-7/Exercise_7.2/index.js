const LinkedList = require('../global-linked-list')

LinkedList.prototype.rotate = function (no) {
    if (no == 0 || this.head === null) return
    let current = this.head

    for (let i = 1; i < no && current != null; i++)
        current = current.next

    if (current === null) return
    let nthNode = current

    while (current.next != null)
        current = current.next

    current.next = this.head
    this.head = nthNode.next
    nthNode.next = null
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
    list.rotate(3)
    list.printList()
}

process([2, 4, 7, 8, 9])
