/**
 * map&filter
 */

const nameArr = ["tanaka", "yamada", "suzuki"];

// for(let index=0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// }) //nameに配列の要素が順番に入る（以前はfor文で同じことをした）

// console.log(nameArr2);

//nameArr.map((name) => console.log(name));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num%2===1; //条件に一致したものだけを返す
// })

// console.log(newNumArr);

// const nameArr = ['tanaka','yamada','suzuki'];

//番号をつけて表示する

// for(let index=0; index < nameArr.length; index++){
//   console.log(`${index+1}番目は${nameArr[index]}です。`);
// }

//nameArr.map((name, index) => console.log(`${index+1}番目は${name}です。`));
//第一引数には配列の要素、第二引数には配列の番号が入る

const newNameArr = nameArr.map((name) => {
  if (name === "suzuki") {
    return name;
  } else {
    return `${name}さん`;
  }
}); //suzuki以外にはさん付けする

console.log(newNameArr);
