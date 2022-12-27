const findDifference = (array, number) => {
    let set = new Set(array);
    for (i in array) {
        if (set.has(array[i] + number)) return 1
    }
    return 0
}

console.log(findDifference([5, 10, 3, 2, 50, 80], 78));
console.log(findDifference([-10, 20], 30));
