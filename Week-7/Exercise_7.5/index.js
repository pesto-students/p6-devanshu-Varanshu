const checkGreaterNo = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        let loopExit = false
        for (let j = i + 1; j <= array.length; j++) {
            if (array[j] > array[i]) {
                newArray.push(array[j])
                break
            } else {
                loopExit = true
            }
        }
        if (loopExit) {
            newArray.push(-1)
        }
    }
    return newArray
}

console.log(checkGreaterNo([1, 3, 2, 4]));
console.log(checkGreaterNo([6, 8, 0, 1, 3]));