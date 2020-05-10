// illustrate synchronous program execution by adding two
// console.log() methods that execute synchronously
console.log('Starting App');

setTimeout(() => {
    console.log('Inside of callback');
}, 3000);

setTimeout(() => {
    console.log('Second setTimeout works!');
}, 0);

console.log('Finishing Up');
