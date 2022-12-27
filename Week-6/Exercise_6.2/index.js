const spiralMatrix = (array) => {
    let m = array.length, n = array[0].length;
    let arr = [];
    let i_start = 0, j_start = 0, i_end = m - 1, j_end = n - 1;
    while (i_start <= i_end || j_start <= j_end) {
        // top row
        for (let i = i_start, j = j_start; j <= j_end && i <= i_end; j++) {
            arr.push(array[i][j]);
        }
        // eleminating first row from the array
        i_start++;
        // last column
        for (let i = i_start, j = j_end; i <= i_end && j >= j_start; i++) {
            arr.push(array[i][j]);
        }
        // eleminating last column from the array
        j_end--;

        // last row
        for (let i = i_end, j = j_end; j >= j_start && i >= i_start; j--) {
            arr.push(array[i][j]);
        }
        // eleminating last row
        i_end--;

        // First column
        for (let i = i_end, j = j_start; i >= i_start && j <= j_end; i--) {
            arr.push(array[i][j]);
        }
        // eleminating First column
        j_start++;
    }
    return arr;
}
console.log(spiralMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

console.log(spiralMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]))