const total = 42 + 42;
console.log(total);

console.log("JavaScript");

console.log(typeof true);
console.log(typeof 42);
console.log(typeof "JavaScript");
console.log(typeof Symbol("シンボル"));
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof ["配列"]);
console.log(typeof { "key": "value" });
console.log(typeof function() {});

const str = "森森本森森";

console.log(str.indexOf("本"));
console.log(str.indexOf("火"));
console.log(~0);
console.log(~(-1));

const str2 = "森森木森森";
if (str2.indexOf("木") !== -1) {
  console.log("木を見つけました");
}

console.log( 9 << 2);
console.log(0b1111 << 2);

// const array = [1, 2];
// const [a, b] = array;
// console.log(a);
// console.log(b);

const obj = {
  "key": "value"
};
// const { key } = obj;
console.log(obj);
console.log(obj.key);
const key = obj.key;
console.log(key);

const valueA = true ? "A" : "B";
console.log(valueA);
const valueB = false ? "A" : "B";
console.log(valueB);

function addPrefix(text, prefix) {
  const pre = typeof prefix === "string" ? prefix : "デフォルト:";
  return pre + text;
}
console.log(addPrefix("文字列"));
console.log(addPrefix("文字列", "カスタム"));


function addPrefix2(text, prefix) {
  let pre2 = "デフォルト:";
  if (typeof prefix === "string") {
    pre2 = prefix;
  }
  return pre2 + text;
}
console.log(addPrefix2("文字列"));
console.log(addPrefix2("文字列", "カスタム"));

const value = "str";
if (typeof value === "string" && value === "str") {
  console.log(`${value} is string value`);
}

const value2 = 1;
if (value2 === 0 || value2 === 1) {
  console.log("valueは0または1です。");
}
const str3 = "";
console.log(!!str3);

let x;
if (!x) {
  console.log("falsyな値なら表示", x);
}

let x1;
if ( x1 === undefined) {
  console.log("xがundefinedなら表示", x1);
}

// ここではNaNにしか変換できないので表示できない
const userInput = "任意の文字列";
const num = Number.parseInt(userInput, 10);
if (!Number.isNaN(num)) {
  console.log("NaNではない値にパースできた", num);
}

function sum(...values) {
  return values.reduce((total3, value2) => {
    return total3 + value2;
  }, 0);
}
console.log(value2);
const x2 = 1, z = 10;
let y2 = 5;
console.log(sum(x2, y2, z));

// double関数
function double(num) {
  return num * 2;
}
console.log(double(10));

function argumentsToArray(x, y) {
  return [x, y];
}
console.log(argumentsToArray(1, 2));
console.log(argumentsToArray(1));

// NGなデフォルト引数の使用法
function addPrefix(text, prefix) {
  const pre = prefix || "デフォルト：";
  return pre + text;
}
console.log(addPrefix("文字列"));
console.log(addPrefix("文字列", "カスタム"));

// OKなデフォルト引数の使用法
function addPrefix(text, prefix = "デフォルト：") {
  return prefix + text;
}
console.log(addPrefix("文字列"));
console.log(addPrefix("文字列", ""));
console.log(addPrefix("文字列", "カスタム："));

function fn(...args) {
  console.log(args);
}
fn("a", "b", "c");

function fn(x, y, z) {
  console.log(x);
  console.log(y);
  console.log(z);
}
const array = [1, 2, 3];
// Spread構文で配列を引数に展開して関数を呼び出す
fn(...array);
// 次のように書いたのと同じ意味
fn(array[0], array[1], array[2]);

// 関数の引数と分割代入
function printUserId(user) {
  console.log(user.id);
}
const user = {
  id: 42
};
printUserId(user);

// 第1引数のオブジェクトから`id`プロパティを変数`id`として定義する
function printUserId({id}) {
  console.log(id);
}
const user2 = {
  id: 42
};
printUserId(user2);

// 関数の仮引数が左辺で、関数に渡す引数を右辺と考えるとほぼ同じ構文であることを以下180行目までで記載
const user3 = {
  id: 55
};
// オブジェクトの分割代入
const { id } = user3;
console.log(id);
// 関数の引数の分割代入
function printUserId({ id }) {
  console.log(id);
}
printUserId(user3);

// 配列でも関数の引数における分割代入は利用できる
function print([first, second]) {
  console.log(first);
  console.log(second);
}
const array3 = [1, 2];
print(array3);

// 関数はオブジェクト~196
function fn() {
  console.log("fnが呼び出されました");
}
// 関数`fn`を`myFunc`変数に代入している
const myFunc = fn;
myFunc();

// factorialは関数の外から呼び出せる名前
// innerFactは関数の外から呼び出せない名前
const factorial = function innerFact(n) {
  if (n === 0) {
    return 1;
  }
  // innerFactを再帰的に呼び出している
  return n * innerFact(n - 1);
};
console.log(factorial(3));

// Arrow Function ----------------------
// 仮引数の数と定義
const fnA = () => { /* 仮引数がないとき */ };
const fnB = (x) => { /* 仮引数が1つのみのとき */ };
const fnC = x => { /* 仮引数が1つのみのときは()を省略可能 */ };
const fnD = (x, y) => { /* 仮引数が複数のとき */ };
// 値の返し方
// 次の２つの定義は同じ意味となる
const mulA = x => { return x * x; }; // ブロックの中でreturn
const mulB = x => x * x;            // 1行のみの場合はreturnとブロックを省略できる

// mapメソッドは、配列の要素を順番にコールバック関数へ渡し、そのコールバック関数が返した値を新しい配列にして返す
const array4 = [1, 2, 3];
// 1,2,3と順番に値が渡されコールバック関数（匿名関数）が処理する
const doubleArray = array4.map(function(value) {
    return value * 2; // 返した値をまとめた配列ができる
});
console.log(doubleArray); // => [2, 4, 6]

const array5 = [1, 2, 3];
// 仮引数が1つなので`()`を省略できる
// 関数の処理が1つの式なので`return`文を省略できる
const doubleArray2 = array5.map(value => value * 2);
console.log(doubleArray2); // => [2, 4, 6]

// コールバック関数---------------------
// 引数として渡される関数のことをコールバック関数と呼びます。 
// 一方、コールバック関数を引数として使う関数やメソッドのことを高階関数と呼びます。
const array6 = [1, 2, 3];
const output = (value) => {
    console.log(value);
};
array6.forEach(output);
// 次のように実行しているのと同じ
// output(1); => 1
// output(2); => 2
// output(3); => 3

console.log(1);

// 文と式
const fn2 = function() {
  return 1;
};
console.log(fn2());

// 条件分岐
