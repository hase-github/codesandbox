/**
 * 三項演算子
 */

// ある条件　？　条件がtureのとき　：　条件がfalseのとき
//簡単なif文を１行で書ける

// const val1 = 1 < 0 ? 'tureです' : 'falseです';
// console.log(val1);

//  const num = 1300;
// // console.log(num.toLocaleString()); //数字を３桁区切りにする

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';

// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};

console.log(checkSum(50, 40));
