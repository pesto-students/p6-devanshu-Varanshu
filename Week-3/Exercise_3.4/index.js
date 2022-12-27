function createStack() {
    let items = []
    return {
        push(item) {
            items.push(item);
        },
        pop() {
            console.log(items);
            return items.pop();
        }
    }
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.items);