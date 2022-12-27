const fib = (n) => ({
    [Symbol.iterator]: () => {
        let start = 1;
        let a = 0, b = 0;
        return {
            next: () => {
                if (start++ <= n) {
                    [a, b] = [b, (a + b) || 1]
                    return { value: a, done: false }
                } else {
                    return { done: true }
                }
            }
        }
    }
});
console.log("The fibonacci Series is:");
const array = [...fib(7)][Symbol.iterator]()
for (num of array) {
    console.log(num);
}
