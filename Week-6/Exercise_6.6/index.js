const closestNo = (array, target) => {
    let closest = Number.MAX_VALUE;
    let size = array.length;
    for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
            for (let k = j + 1; k < size; k++) {
                var sum = array[i] + array[j] + array[k];
                if (Math.abs(sum - target) < Math.abs(closest - target)) {
                    closest = sum;
                }
            }
        }
    }
    return closest;
}

console.log(closestNo([-1, 2, 1, -4], 1))