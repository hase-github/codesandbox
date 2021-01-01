/**
 * デフォルト値、引数など
 */

const sayHello = (name) => {
  console.log(`こんにちは、${name}さん。`);
};

sayHello();

//変数（引数）設定時に初期値を設定できる
const sayHello2 = (name = "ゲスト") => {
  console.log(`こんにちは、${name}さん。`);
};

sayHello2();
