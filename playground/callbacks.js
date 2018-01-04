const sumThat = (a, b, cb) => {
  setTimeout(() => cb(a + b), 2000);
}

//sumThat(1, 2, (result) => console.log(result));

const addToArray = (x, cb) => {
  console.log('Waiting until it increments to array...');
  setTimeout(() => {
    x.forEach(item => x[item-1] = item+1);
    cb(x);
  }, 2000);
}
//addToArray([1, 2, 3, 4, 5], (newArr) => console.log(newArr));
