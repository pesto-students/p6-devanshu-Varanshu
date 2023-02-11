class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

const maxDepth = (node) => {
    if (!node) return 0
    let lDepth = maxDepth(node.left)
    let rDepth = maxDepth(node.right)

    if (lDepth > rDepth)
        return lDepth + 1
    else
        return rDepth + 1
}

let root = new Node(3)
root.left = new Node(9)
root.right = new Node(20)
root.right.right = new Node(15)
root.right.left = new Node(7)

console.log(maxDepth(root))

root = new Node(1)
root.right = new Node(2)
console.log(maxDepth(root))
