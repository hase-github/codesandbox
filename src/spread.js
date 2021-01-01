/**
 * スプレット構文 ...
 */

//配列の展開
//  const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1+num2);
// sumFunc(arr1[1],arr1[1]);
// sumFunc(...arr1);//配列の０番目と１番目が展開されて、関数に渡されている。

//まとめる
// const arr2 = [1,2,3,4,5]
// const [num1, num2, ...arr3] = arr2; //分割代入
// console.log(num1);
// console.log(num2);
// console.log(arr3);//分割代入でnum1,num2に代入されなかったものがarr3にまとめて代入された

//配列のコピー、結合

const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4]; //arr4がコピーされている
arr6[0] = 200;
console.log(arr4); //０番目が２００になっていない
console.log(arr6); //0番目が200になっている

// const arr7 = [...arr4, ...arr5];
// console.log(arr7); //arr4とarr5が結合されている

//const arr8 = arr4; // =を使って代入すると、arr8はarr4を参照することになる
//console.log(arr8);
// arr8[0] = 100;
// console.log(arr4); //arr8へ100を代入したものが、arr4にも効いてしまう
