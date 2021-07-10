// const total = 42 + 42;
// console.log(total);

// console.log("JavaScript");

// console.log(typeof true);
// console.log(typeof 42);
// console.log(typeof "JavaScript");
// console.log(typeof Symbol("シンボル"));
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof ["配列"]);
// console.log(typeof { "key": "value" });
// console.log(typeof function() {});

// const str = "森森本森森";

// console.log(str.indexOf("本"));
// console.log(str.indexOf("火"));
// console.log(~0);
// console.log(~(-1));

// const str2 = "森森木森森";
// if (str2.indexOf("木") !== -1) {
//   console.log("木を見つけました");
// }

// console.log( 9 << 2);
// console.log(0b1111 << 2);

// // const array = [1, 2];
// // const [a, b] = array;
// // console.log(a);
// // console.log(b);

// const obj = {
//   "key": "value"
// };
// // const { key } = obj;
// console.log(obj);
// console.log(obj.key);
// const key = obj.key;
// console.log(key);

// const valueA = true ? "A" : "B";
// console.log(valueA);
// const valueB = false ? "A" : "B";
// console.log(valueB);

// function addPrefix(text, prefix) {
//   const pre = typeof prefix === "string" ? prefix : "デフォルト:";
//   return pre + text;
// }
// console.log(addPrefix("文字列"));
// console.log(addPrefix("文字列", "カスタム"));


// function addPrefix2(text, prefix) {
//   let pre2 = "デフォルト:";
//   if (typeof prefix === "string") {
//     pre2 = prefix;
//   }
//   return pre2 + text;
// }
// console.log(addPrefix2("文字列"));
// console.log(addPrefix2("文字列", "カスタム"));

// const value = "str";
// if (typeof value === "string" && value === "str") {
//   console.log(`${value} is string value`);
// }

// const value2 = 1;
// if (value2 === 0 || value2 === 1) {
//   console.log("valueは0または1です。");
// }
// const str3 = "";
// console.log(!!str3);

// let x;
// if (!x) {
//   console.log("falsyな値なら表示", x);
// }

// let x1;
// if ( x1 === undefined) {
//   console.log("xがundefinedなら表示", x1);
// }

// // ここではNaNにしか変換できないので表示できない
// const userInput = "任意の文字列";
// const num = Number.parseInt(userInput, 10);
// if (!Number.isNaN(num)) {
//   console.log("NaNではない値にパースできた", num);
// }

// function sum(...values) {
//   return values.reduce((total3, value2) => {
//     return total3 + value2;
//   }, 0);
// }
// console.log(value2);
// const x2 = 1, z = 10;
// let y2 = 5;
// console.log(sum(x2, y2, z));

// // double関数
// function double(num) {
//   return num * 2;
// }
// console.log(double(10));

// function argumentsToArray(x, y) {
//   return [x, y];
// }
// console.log(argumentsToArray(1, 2));
// console.log(argumentsToArray(1));

// // NGなデフォルト引数の使用法
// function addPrefix(text, prefix) {
//   const pre = prefix || "デフォルト：";
//   return pre + text;
// }
// console.log(addPrefix("文字列"));
// console.log(addPrefix("文字列", "カスタム"));

// // OKなデフォルト引数の使用法
// function addPrefix(text, prefix = "デフォルト：") {
//   return prefix + text;
// }
// console.log(addPrefix("文字列"));
// console.log(addPrefix("文字列", ""));
// console.log(addPrefix("文字列", "カスタム："));

// function fn(...args) {
//   console.log(args);
// }
// fn("a", "b", "c");

// function fn(x, y, z) {
//   console.log(x);
//   console.log(y);
//   console.log(z);
// }
// const array = [1, 2, 3];
// // Spread構文で配列を引数に展開して関数を呼び出す
// fn(...array);
// // 次のように書いたのと同じ意味
// fn(array[0], array[1], array[2]);

// // 関数の引数と分割代入
// function printUserId(user) {
//   console.log(user.id);
// }
// const user = {
//   id: 42
// };
// printUserId(user);

// // 第1引数のオブジェクトから`id`プロパティを変数`id`として定義する
// function printUserId({id}) {
//   console.log(id);
// }
// const user2 = {
//   id: 42
// };
// printUserId(user2);

// // 関数の仮引数が左辺で、関数に渡す引数を右辺と考えるとほぼ同じ構文であることを以下180行目までで記載
// const user3 = {
//   id: 55
// };
// // オブジェクトの分割代入
// const { id } = user3;
// console.log(id);
// // 関数の引数の分割代入
// function printUserId({ id }) {
//   console.log(id);
// }
// printUserId(user3);

// // 配列でも関数の引数における分割代入は利用できる
// function print([first, second]) {
//   console.log(first);
//   console.log(second);
// }
// const array3 = [1, 2];
// print(array3);

// // 関数はオブジェクト~196
// function fn() {
//   console.log("fnが呼び出されました");
// }
// // 関数`fn`を`myFunc`変数に代入している
// const myFunc = fn;
// myFunc();

// // factorialは関数の外から呼び出せる名前
// // innerFactは関数の外から呼び出せない名前
// const factorial = function innerFact(n) {
//   if (n === 0) {
//     return 1;
//   }
//   // innerFactを再帰的に呼び出している
//   return n * innerFact(n - 1);
// };
// console.log(factorial(3));

// // Arrow Function ----------------------
// // 仮引数の数と定義
// const fnA = () => { /* 仮引数がないとき */ };
// const fnB = (x) => { /* 仮引数が1つのみのとき */ };
// const fnC = x => { /* 仮引数が1つのみのときは()を省略可能 */ };
// const fnD = (x, y) => { /* 仮引数が複数のとき */ };
// // 値の返し方
// // 次の２つの定義は同じ意味となる
// const mulA = x => { return x * x; }; // ブロックの中でreturn
// const mulB = x => x * x;            // 1行のみの場合はreturnとブロックを省略できる

// // mapメソッドは、配列の要素を順番にコールバック関数へ渡し、そのコールバック関数が返した値を新しい配列にして返す
// const array4 = [1, 2, 3];
// // 1,2,3と順番に値が渡されコールバック関数（匿名関数）が処理する
// const doubleArray = array4.map(function(value) {
//     return value * 2; // 返した値をまとめた配列ができる
// });
// console.log(doubleArray); // => [2, 4, 6]

// const array5 = [1, 2, 3];
// // 仮引数が1つなので`()`を省略できる
// // 関数の処理が1つの式なので`return`文を省略できる
// const doubleArray2 = array5.map(value => value * 2);
// console.log(doubleArray2); // => [2, 4, 6]

// // コールバック関数---------------------
// // 引数として渡される関数のことをコールバック関数と呼びます。 
// // 一方、コールバック関数を引数として使う関数やメソッドのことを高階関数と呼びます。
// const array6 = [1, 2, 3];
// const output = (value) => {
//     console.log(value);
// };
// array6.forEach(output);
// // 次のように実行しているのと同じ
// // output(1); => 1
// // output(2); => 2
// // output(3); => 3

// console.log(1);

// // 文と式
// const fn2 = function() {
//   return 1;
// };
// console.log(fn2());

// // 条件分岐

// // ループと反復処理-------------------------------

// let total2 = 0; // totalの初期値は0
// // for文の実行フロー
// // iを0で初期化
// // iが10未満（条件式を満たす）ならfor文の処理を実行
// // iに1を足し、再び条件式の判定へ
// for (let i = 0; i < 10; i++) {
//     total2 += i + 1; // 1から10の値をtotalに加算している
// }
// console.log(total2); // => 55

// // 配列の forEach メソッド
// const array8 = [1, 2, 3]
// array.forEach(currentValue => {
//   console.log(currentValue);
// });

// // for文の数値の合計と同じ sum関数 を forEachメソッドで実装
// function sum2(numbers) {
//   let total = 0;
//   numbers.forEach(num => {
//     total += num;
//   });
//   return total;
// }
// sum2([1, 2, 3, 4, 5]);

// // numbers[i]はnumbersに入っている配列のi番目をとってくる
// // 引数の`num`が偶数ならtrueを返す
// function isEven(num) {
//     return num % 2 === 0;
// }
// // 引数の`numbers`に偶数が含まれているならtrueを返す
// function isEvenIncluded(numbers) {
//     let isEvenIncluded = false;
//     for (let i = 0; i < numbers.length; i++) {
//         const num = numbers[i];
//         if (isEven(num)) {
//             isEvenIncluded = true;
//             break;
//         }
//     }
//     return isEvenIncluded;
// }
// const array7 = [1, 5, 10, 15, 20];
// console.log(isEvenIncluded(array7)); // => true


// // 配列のsomeメソッド
// function isEven(num) {
//   return num % 2 === 0
// }
// const numbers = [1, 5, 10, 15, 20];
// console.log(numbers.some(isEven)); // => true

// // continue文
// // `number`が偶数ならtrueを返す
// function isEven(num) {
//   return num % 2 === 0;
// }
// // `numbers`に含まれている偶数だけを取り出す
// function filterEven(numbers) {
//   const results = [];
//   for (let i=0; i < numbers.length; i++) {
//      const num = numbers[i];
//         // 偶数ではないなら、次のループへ
//         if (!isEven(num)) {
//             continue;
//         }
//         // 偶数を`results`に追加
//         results.push(num);
//   }
//    return results;
// }
// const array9 = [1, 5, 10, 15, 20];
// console.log(filterEven(array9)); // => [10, 20]

// // 配列のfilterメソッド
// function isEven(num) {
//     return num % 2 === 0;
// }

// const array10 = [1, 5, 10, 15, 20];
// console.log(array10.filter(isEven)); // => [10, 20]

// // for...in文
// const obj2 = {
//   "a": 1,
//   "b": 2,
//   "c": 3
// };
// for (const key in obj2) {
//   const value = obj2[key];
//   console.log(`key:${key}, value:${value}`);
// }
// // Object.keysメソッドは引数のオブジェクト自身が持つ列挙可能なプロパティ名の配列を返す
// const obj3 = {
//   "a": 1,
//   "b": 2,
//   "c": 3
// };
// Object.keys(obj3).forEach(key => {
//   const value = obj3[key];
//   console.log(`key:${key}, value:${value}`);
// });

// // ES2015 for...of文
// const array11 = [1, 2, 3];
// for (const value of array) {
//   console.log(value);
// }

// // reduceメソッドは、そもそも変数宣言をしていない reduceメソッドでは常に新しい値を返すことで、一つの変数の値を更新していく必要がなくなる。
// // これはconstと同じく、一度作った変数の値を変更しないため、意図しない変数の更新を避けることに繋がります。
// function sum3(numbers) {
//   return numbers.reduce((total, num) => {
//     return total + num;
//   }, 0);
// }
// console.log(sum3([1, 2, 3, 4, 5]));

// // {} は object のインスタンスオブジェクト
// const obj4 = new Object();
// // ↑これは 以下のオブジェクトリテラルと同じ
// const obj5 = {};

// // 以下のコードは悪い例 JSオブジェクトはmutableの特性をもつので、関数が受け取ったオブジェクトにプロパティを追加できてしまう
// function changeProperty(obj6) {
//   obj6.key = "value";
//   // いろんな処理…
// }
// const obj6 = {};
// changeProperty(obj6); //ここで、obj6のプロパティを変更している
// console.log(obj6.key); //なので、結果 => "value"が入っている

// // delete演算子 rubyとは使い方が違う
// delete obj6.key;
// console.log(obj6.key);

// // JSのオブジェクトプロパティ変更を防止するには、strict mode と Object.freeze を使う
// "use strict";
// const object = Object.freeze({ key: "value" });
// // freezeしたオブジェクトにプロパティを追加や変更できない
// // console.log(object.key = "value23");
// object.key = "value";
// // => TypeError: "key" is read-only
// // console.log(object.key);
// // 
// 'use strict';
// var v = "こんにちは！ Strict モードのスクリプト！";
// console.log(v);

// function strict() {
//   // 関数レベルの Strict モード構文
//   'use strict';
//   function nested() { return '私もそうです！'; }
//   return "こんにちは！ Strict モードの関数です！  " + nested();
// }
// console.log(strict());

// function notStrict() { return "Strict モードではありません"; }
// console.log(notStrict());

// 

// const widget = {
//     window: {
//         title: "ウィジェットのタイトル"
//     }
// };
// // `window`を`windw`と間違えているが、例外は発生しない
// console.log(widget.windw); // => undefined
// // さらにネストした場合に、例外が発生する
// // `undefined.title`と書いたのと同じ意味となるため
// console.log(widget.windw.title); // => TypeError: widget.windw is undefined
// // 例外が発生した文以降は実行されません

// Stringコンストラクタ関数の動き
// String("str"); // => "str"
// console.log(String({ key: "value" })); // => "[object Object]"

// const obj = { key: "value" };
// console.log(obj.toString()); // => "[object Object]"
// // `String`コンストラクタ関数は`toString`メソッドを呼んでいる
// console.log(String(obj)); // => "[object Object]"

// 独自のtoStringメソッドを定義
// const customObject = {
//     toString() {
//         return "custom value";
//     }
// };
// console.log(String(customObject)); // => "custom value"

// const obj = {};
// const keyObject1 = { a: 1 };
// const keyObject2 = { b: 2 };
// // どちらも同じプロパティ名（"[object Object]"）に代入している
// obj[keyObject1] = "1";
// obj[keyObject2] = "2";
// console.log(obj); //  { "[object Object]": "2" }

// const obj = {};
// // Symbolは例外的に文字列化されず扱える
// const symbolKey1 = Symbol("シンボル1");
// const symbolKey2 = Symbol("シンボル2");
// obj[symbolKey1] = "1";
// obj[symbolKey2] = "2";
// console.log(obj[symbolKey1]); // => "1"
// console.log(obj[symbolKey2]); // => "2"

// //オブジェクトの列挙
// const obj = {
//   "one": 1,
//   "two": 2,
//   "three": 3
// };
// // `Object.keys`はキーの列挙した配列を返す
// console.log(Object.keys(obj));
// // `Object.values`は値を列挙した配列を返す
// console.log(Object.values(obj));
// // `Object.entries`は[キー,値]の配列を返す
// console.log(Object.entries(obj));

// const obj = {
//     "one": 1,
//     "two": 2,
//     "three": 3
// };
// const keys = Object.keys(obj);
// keys.forEach(key => {
//     console.log(key);
// });
// // 次の値が順番に出力される
// // "one"
// // "two"
// // "three"

// const objectA = { a: "a" };
// const objectB = { b: "b" };
// const merged = Object.assign({}, objectA, objectB);
// console.log(merged);

// // `version`のプロパティ名が被っている
// const objectA = { version: "a" };
// const objectB = { version: "b" };
// const merged = Object.assign({}, objectA, objectB);
// // 後ろにある`objectB`のプロパティで上書きされる
// console.log(merged); // => { version: "b" }

// // 引数の`obj`を浅く複製したオブジェクトを返す
// const shallowClone = (obj) => {
//     return Object.assign({}, obj);
// };
// const obj = { a: "a" };
// const cloneObj = shallowClone(obj);
// console.log(cloneObj); // => { a: "a" }
// // オブジェクトを複製しているので、異なるオブジェクトとなる
// console.log(obj);
// console.log(obj === cloneObj); // => false

// const shallowClone = (obj) => {
//     return Object.assign({}, obj);
// };
// const obj = {
//     level: 1,
//     nest: {
//         level: 2
//     },
// };
// const cloneObj = shallowClone(obj);
// // `nest`プロパティのオブジェクトは同じオブジェクトのままになる 
// console.log(obj.level === cloneObj.level);
// console.log(obj.nest);
// console.log(cloneObj.nest === obj.nest); // => true

// // 引数の`obj`を浅く複製したオブジェクトを返す
// const shallowClone = (obj) => {
//     return Object.assign({}, obj);
// };
// // 引数の`obj`を深く複製したオブジェクトを返す
// function deepClone(obj) {
//     const newObj = shallowClone(obj);
//     // プロパティがオブジェクト型であるなら、再帰的に複製する
//     Object.keys(newObj)
//         .filter(k => typeof newObj[k] === "object")
//         .forEach(k => newObj[k] = deepClone(newObj[k]));
//     return newObj;
// }
// const obj = {
//     level: 1,
//     nest: {
//         level: 2
//     }
// };
// const cloneObj = deepClone(obj);
// // `nest`オブジェクトも再帰的に複製されている
// console.log(cloneObj.nest === obj.nest); // => false

// // プロトタイプオブジェクト
// const obj = {
//     "key": "value"
// };
// console.log(obj.toString === Object.prototype.toString); 
// console.log(Object.prototype.toString()); 
// console.log(obj.toString());

// オブジェクトのインスタンスにtoStringメソッドを定義
// const customObject = {
//     toString() {
//         return "custom value";
//     }
// };
// console.log(customObject.toString()); // => "custom value"

