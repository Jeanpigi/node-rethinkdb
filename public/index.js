// const string = 'hello world comunicacíon';
// const fruits = ['manzana', 'banana', 'pera']

// // Esta funcion se encarga de transformar los caracteres especiales de una cadena a formato UTF8
// const encode = (str) => {
//     return encodeURI(str);
// }

// const mostrar = (valor) => {
//     valor.forEach((ele) => {
//         console.log(ele);
//     });
// }

// // console.log(string);
// // console.log(encode(string));

// mostrar(fruits);

// // CallStack
// const square = (num) => {
//     return num * num;
// }

// const logSquare = (num) => {
//     console.log(square(num));
// }

// logSquare(2);

console.log('hello');

setTimeout(() => {
  console.log('time');
}, 2000);

console.log('world');

const adversario = 'Hulk';

const LOKI_DISFRACES = {
  'Iron-Man': 'Magneto',
  Thor: 'Odin',
  Hulk: 'Thanos',
};

const LOKI_DEFAULT_DISFRAZ = 'Loki';

const loki = LOKI_DISFRACES[adversario] || LOKI_DEFAULT_DISFRAZ;

console.log(loki);
