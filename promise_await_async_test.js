function increase(number) {
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const result = number +10;
            if(result >50){
                const e = new Error('NumberIsOver50');
                return reject(e);
            }

            resolve(result);
        }, 1000);
        
    });
    return promise;
}

increase(0)
    .then(number=>{
        console.log('1st result: ', number);
        return increase(number);
    })
    .then(number =>{
        console.log('2nd result: ', number);
    })

    
console.log("I run first");

async function runTasks() {
    try{
        let result = await increase(0);
        console.log(result);
        result = await increase(result);
        console.log(result);
    } catch (e){
        console.log(e);
    }
}

runTasks();

console.log("run faster than async function!");

