//-------------------------------------------------------------------------------

const values = {
    resolve: 'resolved',
    rejected: 'rejected'
}

class customPromise {
    constructor(self) {
        this.promiseCurrentState = null
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
        this.then_fn = null
        this.catch_fn = null
        self(this.resolve, this.resolve)
    }
    resolve(value) {
        if (this.promiseCurrentState === null) {
            this.then_fn
                ? this.then_fn(value)
                : null
        }
        this.promiseCurrentState = values.resolve
    }
    reject(value) {
        if (this.promiseCurrentState === null) {
            this.catch_fn
                ? this.catch_fn(value)
                : null
        }
        this.promiseCurrentState = values.rejected
    }
    then(then_fn) {
        this.then_fn = then_fn
        return this
    }
    catch(catch_fn) {
        this.catch_fn = catch_fn
        return this
    }
}

const getNumber = () =>
    new customPromise((res, rej) => {
        const randomNo = parseInt(Math.random() * 100, 10)
        setTimeout(() => {
            if (randomNo % 5 === 0) {
                rej(`rejected ${randomNo}`)
            } else {
                res(`resolved ${randomNo}`)
            }
        }, randomNo * 10)
    })

const run_command = () => {
    const numberPromise = getNumber();
    numberPromise
        .then((value) => {
            console.log(value);
        })
        .catch((error) => {
            console.log(error);
        })
}

run_command()