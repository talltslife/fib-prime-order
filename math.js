const  getFibArray = (n) => {
    if (n <= 0) {
        return
    }
    if(n===1){
        return [0]
    }
    if(n===2) {
        return [0, 1]
    }
    let arr = [0, 1]
    for (let i = 2; i < n; i++){
        const value = arr[i - 2] + arr[i -1];
        arr.push(value)
    }
    return arr
}

const getFibArrayObj = (n) => {
    const fibArrayObj = []
    const fibArray = getFibArray(n)
    fibArray.forEach((e,i) => {
        fibArrayObj.push({'type':'Fib','value': e, position: i+1})
    })
    return fibArrayObj
}

const getPrimeArrayObj = (arg) => {
    const primeObjArray = []
    const  primeArray = PrimeProcessor.generate(arg)
    primeArray.forEach((e, i) => {
        primeObjArray.push({'type': 'Prime', 'value': e, position: i + 1})
    })
    return primeObjArray
}

const PrimeProcessor=(function(){
    let primeArray=[];

    function _isPrime(num){
        if(num<=1){
            throw new Error("Number cannot be smaller than 2");
        }
        let status=true;
        if(num!==2&&num%2===0){
            status=false;
        }else{
            for(let i=2;i<num;++i){
                if(num%i===0){
                    status=false;
                    break;
                }
            }
        }
        return status;
    }

    return {
        generate:function(n){
            var count=0,currentNum=2;
            while(count<n){
                if(_isPrime(currentNum)){
                    primeArray.push(currentNum);
                    count++;
                }
                currentNum++;
            }
            return primeArray;
        },
    };
})();

const sortFunc = (fibArray, primeArray) => {
    const combineArray = fibArray.concat(primeArray);
    combineArray.sort((a,b) => (a.value > b.value) ? 1 : (a.value === b.value) ? ((a.position > b.position) ? 1 : -1) : -1 )
    return combineArray
}

module.exports = {
    getPrimeArrayObj,
    sortFunc,
    getFibArrayObj
};