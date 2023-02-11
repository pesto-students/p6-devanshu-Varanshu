async function doTask1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Slept for: 1s`);
        }, 1000)
    })
}
async function doTask2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Slept for: 2s`)

        }, 2000)
    })
}
async function doTask3() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Slept for: 3s`)
        }, 3000)
    })
}

//Async Await function
async function async_await_fn() {

    await doTask1()
        .then(res => console.log(res))
    await doTask2()
        .then(res => console.log(res))
    await doTask3()
        .then(res => console.log(res))
}

async_await_fn()


//Generator Function

function* generator() {
    yield doTask1()
    yield doTask2()
    yield doTask3()
}

const obj = generator()
obj
    .next()
    .value
    .then(res => console.log(res))
obj
    .next()
    .value
    .then(res => console.log(res))
obj
    .next()
    .value
    .then(res => console.log(res))

