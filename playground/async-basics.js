console.log('App started');

setTimeout(() => console.log('2sec callback'), 2000);
setTimeout(() => console.log('0sec callback'), 0);

console.log('one more step');
console.log('App finished');
