const incrementAll = (arr) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] == 'number'){
          arr[i]++;
        } else {
          reject('Array has non-number element(s)!');
        }
      }
      resolve(arr);
    }, 2000);
  });
};

incrementAll([2, 5, 1, 6, 'k', 10, 3])
  .then((modifiedArr) => {
    console.log(modifiedArr);
  })
  .catch((err) => console.log('Error:', err));

/*
const a = 10;
const b = 5;

let handler = new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve(a+b);
  }, 2000);
});

handler
  .then(result => console.log(result))
  .catch(error => console.log(error));
*/
