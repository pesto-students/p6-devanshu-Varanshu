const sort = (array) => {
    let start = 0
    let end = array.length - 1;
    let mid = 0, i = 0;
    while (mid <= end) {
        if (array[mid] == 0) {
            temp = array[start];
            array[start] = array[mid];
            array[mid] = temp;
            start++;
            mid++;
        }
        else if (array[mid] == 1) {
            mid++;
        }
        else {
            temp = array[mid];
            array[mid] = array[end];
            array[end] = temp;
            end--;
        }

    }
    return array;
}

console.log(sort([0, 2, 1, 0, 2, 1]));

console.log(sort([0, 0, 2, 0, 2, 1, 0, 1, 2, 1, 2, 1, 1]));