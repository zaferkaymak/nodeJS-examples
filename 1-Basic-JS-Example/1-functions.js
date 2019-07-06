// Callback Function example

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

let startNumber = 0;
const interval = setInterval(()=>{
    startNumber++;
    firstFunction(0,secondFunction);
    if(startNumber === 4){
        clearInterval(interval);
    }
    console.log("Run: " + startNumber);
},4000);
