const calcProfit = (array) => {
    let profit = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = array.length - 1; j > i; j--) {
            if (array[j] - array[i] > 0 && profit < (array[j] - array[i])) {
                profit = array[j] - array[i]
            }
        }
    }
    return profit
}

console.log(calcProfit([7, 1, 5, 3, 6, 4]));

console.log(calcProfit([7, 6, 4, 3, 1]));