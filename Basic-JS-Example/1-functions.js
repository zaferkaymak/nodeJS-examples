// Call Function example

const firstFunction = (count,callback) => {
    setTimeout(() => {
        count++;
        console.log('First function:' , count);
        callback(count,thirdFunction);
    },1000);
}

const secondFunction = (count,callback) => {
    setTimeout(() => {
        count++;
        console.log('Secondary function:' , count);
        callback(count);
    },1000);
}

const thirdFunction = (count) => {
    setTimeout(() => {
        count++;
        console.log('Third function:' , count);
    },1000);
}

firstFunction(0,secondFunction);
