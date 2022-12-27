class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null
    }
}

function isBSTUtil(node, min, max) {
    if (!node)
        return true;
    if (node.value < min || node.value > max)
        return false;
    return (
        isBSTUtil(node.left, min, node.value - 1) &&
        isBSTUtil(node.right, node.value + 1, max)
    );
}

let root = new Node(2)
root.left = new Node(1)
root.right = new Node(3)

console.log(isBSTUtil(root));

root = new Node(5)
root.left = new Node(1)
root.left.left = new Node(null)
root.left.right = new Node(null)
root.right = new Node(4)
root.right.left = new Node(3)
root.right.right = new Node(6)

console.log(isBSTUtil(root));
