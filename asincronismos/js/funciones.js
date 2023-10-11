proceso1 = async () => {
  let sum1 = 0;
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      for (let i = 0; i <= 5000; i++) {
        sum1 += i;
      }
      resolve(`la suma es: ${sum1}`);
    }, 5000)
  );
};


proceso2 = async () => {
  let sum1 = 0;
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      for (let i = 0; i <= 20000; i++) {
        sum1 += i;
      }
      resolve(`la suma es: ${sum1}`);
    }, 8000)
  );
};


//

proceso3 = async () => {
  let sum1 = 0;
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      for (let i = 0; i <= 1000; i++) {
        sum1 += i;
      }
      resolve(`la suma es: ${sum1}`);
    }, 3000)
  );
};
document.querySelector("#btnBuscar").addEventListener("click", () => {
  proceso1().then((mensaje) => console.log(mensaje));
  proceso2().then((mensaje) => console.log(mensaje));
  proceso3().then((mensaje) => console.log(mensaje));

});
