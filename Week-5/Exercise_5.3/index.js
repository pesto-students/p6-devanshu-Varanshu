function hasDuplicates(arr) {
    return new Set(arr).size == arr.length ? false : true;
}

console.log(hasDuplicates([1,2,4,1]));
console.log(hasDuplicates([1,2,4,3,6]));