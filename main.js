const [,, ...args] = process.argv
const mathFuncs = require('./math')
const axios = require('axios')

const main =  (arg) => {
    const fibArray = mathFuncs.getFibArrayObj(arg)
    const primeArray = mathFuncs.getPrimeArrayObj(arg)
    return  mathFuncs.sortFunc(fibArray, primeArray)
}

const printFunc = (sortedArray) => {
    sortedArray.forEach(e => {
        console.log(e.type + ' ' + e.position + ': ' + e.value)
    })
}

const arg = parseInt(args[0], 10)
const sortedArray = main(arg)
printFunc(sortedArray)

axios.post('https://hooks.glip.com/webhook/50cd48c4-1d03-4b21-a5de-253692113c80', {
    "activity":"Skills Assessment",
    "title":"Timothy Smith",
    "body":"* Location: [Tim's Repository](https://github.com/talltslife/fib-prime-order)"
})
    .then(res => res)
    .catch(err => err);