const firstFunction = () => {
    setTimeout(() => {
        console.log("First function");
    }, 500);
}
const secondFunction = () => {
    console.log("Second function");
}

firstFunction();
secondFunction();


// const doHomeWork = (subject, callback) => {
//     setTimeout(() => {
//         console.log(`Starting my ${subject} homework.`);
//         callback(subject);
//     }, 500);
// }
// const alertFinished = (subject) => {
//     console.log(`Finished my ${subject} homework.`);
// }
// doHomeWork('math', alertFinished);
