
largestSum = arr => {
    let max_now = 0, max_final = 0;
    for (let i = 0; i < arr.length; i++) {
        max_final = max_final + arr[i];
        if (max_now < max_final)
            max_now = max_final;

        if (max_final < 0)
            max_final = 0;
    }
    return max_now;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const sum = largestSum(arr);
console.log(sum);