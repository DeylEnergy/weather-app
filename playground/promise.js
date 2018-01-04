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
