// To get time of each operation

function time(fn) {
    console.time()
    console.log(fn());
    console.timeEnd()
}


//reducer function with some tweaks
function add(a, b) {
    if (a && !b)
        return a
    else if (!a && b)
        return b
    else
        return a + b
}


//function to cache the result
function memoriseAdd(fn) {
    const cache = new Map()
    return function (...args) {
        const key = args.toString() // convert object to string eg [100, 200] to 100,200  
        if (cache.has(key)) {
            return cache.get(key)
        } else {
            cache.set(key, add(...args))
            return cache.get(key)
        }
    }
}

const addCache = memoriseAdd(add) // to wrap the reducer in a function to cache data

//Used to display result with time taken
// time(() => addCache(100, 100))
// time(() => addCache(100))
// time(() => addCache(100, 200))
// time(() => addCache(100, 100))

//to display just the result
console.log(addCache(100, 100));
console.log(addCache(100));
console.log(addCache(100, 200));
console.log(addCache(100, 100));