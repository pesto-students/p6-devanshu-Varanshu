const Stack = require('../global-stack.js')

Stack.prototype.enqueue = function (element) {
    this.push(element);
}

Stack.prototype.dequeue = function (stack) {
    let val = this.pop();
    while (val) {
        stack.push(val);
        val = this.pop();
    }
    val = stack.pop();
    if (val !== undefined) {
        console.log(val);
        val = stack.pop();
        while (val) {
            this.push(val);
            val = stack.pop();
        }
    } else {
        console.log(-1);
    }

}

const queue = (arr) => {
    let stack1 = new Stack();
    let stack = new Stack();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) stack1.enqueue(arr[++i]);
        else if (arr[i] == 2) stack1.dequeue(stack);
    }
}



queue([1, 2, 1, 3, 2, 1, 4, 2]);
queue([1, 2, 2, 2, 1, 4]);