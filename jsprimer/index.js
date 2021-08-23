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

// 配列-------------------
// // 破壊的メソッド
// // `array`の`index`番目の要素を削除した配列を返す関数
// // 引数の`array`は破壊的に変更される
// function removeAtIndex(array, index) {
//     array.splice(index, 1);
//     return array;
// }
// const array = ["A", "B", "C"];
// // `array`から1番目の要素を削除した配列を取得
// const newArray = removeAtIndex(array, 1);
// console.log(newArray); // => ["A", "C"]
// // `array`自体にも影響を与える
// console.log(array); // => ["A", "C"]

// // .sliceメソッドを使用することでコピーした配列を使用できる。
// // 非破壊的であれば引数の配列への副作用がないので、注意喚起コメントは不要になる。
// // `array`の`index`番目の要素を削除した配列を返す関数
// function removeAtIndex(array, index) {
//     // コピーを作成してから変更する
//     const copiedArray = array.slice();
//     copiedArray.splice(index, 1);
//     return copiedArray;
// }
// const array = ["A", "B", "C"];
// // `array`から1番目の要素を削除した配列を取得
// const newArray = removeAtIndex(array, 1);
// console.log(newArray); // => ["A", "C"]
// // 元の`array`には影響がない
// console.log(array); // => ["A", "B", "C"]

// // Array#forEach
// const array = [1, 2, 3];
// array.forEach((currentValue, index, array) => {
//     console.log(currentValue, index, array);
//     let newArray = currentValue;
//   });
// //  console.log(newArray);
// //???何故、const newArrayに代入できないのかわからない。forEachだと。

// Array#map
// const array = [1, 2, 3];
// // 各要素に10を乗算した新しい配列を作成する
// const newArray = array.map((currentValue, index, array) => {
//     return currentValue * 10;
// });
// console.log(newArray); // => [10, 20, 30]
// // 元の配列とは異なるインスタンス
// console.log(array !== newArray); // => true

// // Array#filter
// const array = [1, 2, 3];
// // 奇数の値を持つ要素だけを集めた配列を返す
// const newArray = array.filter((currentValue, index, array) => {
//     return currentValue % 2 === 1;
// });
// console.log(newArray); // => [1, 3]
// // 元の配列とは異なるインスタンス
// console.log(array !== newArray); // => true

// Array#reduce
// const array = [1, 2, 3];
// // すべての要素を加算した値を返す
// // accumulatorの初期値は`0`
// const totalValue = array.reduce((accumulator, currentValue, index, array) => {
//     return accumulator + currentValue;
// }, 0);
// // 0 + 1 + 2 + 3という式の結果が返り値になる
// console.log(totalValue); // => 6

// // メソッドチェーンと高階関数
// // ECMAScriptのバージョン名と発行年
// const ECMAScriptVersions = [
//     { name: "ECMAScript 1", year: 1997 },
//     { name: "ECMAScript 2", year: 1998 },
//     { name: "ECMAScript 3", year: 1999 },
//     { name: "ECMAScript 5", year: 2009 },
//     { name: "ECMAScript 5.1", year: 2011 },
//     { name: "ECMAScript 2015", year: 2015 },
//     { name: "ECMAScript 2016", year: 2016 },
//     { name: "ECMAScript 2017", year: 2017 },
// ];
// // メソッドチェーンで必要な加工処理を並べている
// const versionNames = ECMAScriptVersions
//     // 2000年以下のデータに絞り込み
//     .filter(ECMAScript => ECMAScript.year <= 2000)
//     // それぞれの要素から`name`プロパティを取り出す
//     .map(ECMAScript => ECMAScript.name);
// console.log(versionNames); // => ["ECMAScript 1", "ECMAScript 2", "ECMAScript 3"]

// // 文字列
// console.log("B" > "A");

// const str = "JavaScript";
// const searchWord = "Script";
// const index = str.indexOf(searchWord);
// if (index !== -1) {
//     console.log(`${searchWord}が見つかりました`);
// } else {
//     console.log(`${searchWord}は見つかりませんでした`);
// }

// 正規表現
// // 正規表現リテラルはロード時にパターンが評価され、例外が発生する
// function main() {
//     // `[`は対となる`]`を組み合わせる特殊文字であるため、単独で書けない
//     const invalidPattern = /[/;
// }

// // `main`関数を呼び出さなくても例外が発生する

// const spaceCount = 3;
// // `/\s{3}/`の正規表現を文字列から作成する
// // "\"がエスケープ文字であるため、"\"自身を文字列として書くには、"\\"のように2つ書く
// const pattern = new RegExp(`\\s{${spaceCount}}`);

// const str = "ABC123EFG";
// const searchPattern = /\d{3}/;
// console.log(str.search(searchPattern)); // => 3

// console.log("文字列".match(/字/)); // => null

// const str = "ABC あいう DE えお";
// const alphabetsPattern = /[a-zA-Z]+/;
// // gフラグなしでは、最初の結果のみを含んだ特殊な配列を返す
// const results = str.match(alphabetsPattern);
// console.log(results.length); // => 1
// // マッチした文字列はインデックスでアクセスできる
// console.log(results[0]); // => "ABC"
// // マッチした文字列の先頭のインデックス
// console.log(results.index); // => 0
// // 検索対象となった文字列全体
// console.log(results.input); // => "ABC あいう DE えお"

// console.log("ABC".match(alphabetsPattern));

// const str = "ABC あいう DE えお";
// const alphabetsPattern = /[a-zA-Z]+/g;
// // gフラグありでは、すべての検索結果を含む配列を返す
// const resultsWithG = str.match(alphabetsPattern);
// console.log(resultsWithG);
// console.log(resultsWithG.length); // => 2
// console.log(resultsWithG[0]); // => "ABC"
// console.log(resultsWithG[1]); // => "DE"
// // indexとinputはgフラグありの場合は追加されない
// console.log(resultsWithG.index); // => undefined
// console.log(resultsWithG.input); // => undefined

// const str = "ABC あいう DE えお";
// const alphabetsPattern = /[a-zA-Z]+/g;
// // matchAllはIteratorを返す
// const matchesIterator = str.matchAll(alphabetsPattern);
// console.log(matchesIterator);
// for (const match of matchesIterator) {
//     // マッチした要素ごとの情報を含んでいる
//     console.log(`match: "${match[0]}", index: ${match.index}, input: "${match.input}"`);
// }
// // 次の順番でコンソールに出力される
// // match: "ABC", index: 0, input: "ABC あいう DE えお"
// // match: "DE", index: 8, input: "ABC あいう DE えお"

// // "ECMAScript (数字+)"にマッチするが、欲しい文字列は数字の部分のみ
// const pattern = /ECMAScript (\d+)/;
// // 返り値は0番目がマッチした全体、1番目がキャプチャの1番目というように対応している
// // [マッチした全部の文字列, キャプチャの1番目, キャプチャの2番目 ....]
// const [all, capture1] = "ECMAScript 6".match(pattern);
// console.log(all); // => "ECMAScript 6"
// console.log(capture1); // => "6"

// // "ES(数字+)"にマッチするが、欲しい文字列は数字の部分のみ
// const pattern = /ES(\d+)/g;
// // iteratorを返す
// const matchesIterator = "ES2015、ES2016、ES2017".matchAll(pattern);
// for (const match of matchesIterator) {
//     // マッチした要素ごとの情報を含んでいる
//     // 0番目はマッチした文字列全体、1番目がキャプチャの1番目である数字
// eslint-disable-next-line max-len
//      console.log(`match: "${match[0]}", capture1: ${match[1]}, index: ${match.index}, input: "${match.input}"`);
// }
// // 次の順番でコンソールに出力される
// // match: "ES2015", capture1: 2015, index: 0, input: "ES2015、ES2016、ES2017"
// // match: "ES2016", capture1: 2016, index: 7, input: "ES2015、ES2016、ES2017"
// // match: "ES2017", capture1: 2017, index: 14, input: "ES2015、ES2016、ES2017"

// // 文字列の置き換え
// const str = "文字列";
// const newStr = str.replace("文字", "");
// console.log(newStr);

// // 検索対象となる文字列
// const str = "にわにはにわにわとりがいる";
// // 文字列を指定した場合は、最初に一致したものだけが置換される
// console.log(str.replace("にわ", "niwa")); // => "niwaにはにわにわとりがいる"
// // `g`フラグなし正規表現の場合は、最初に一致したものだけが置換される
// console.log(str.replace(/にわ/, "niwa")); // => "niwaにはにわにわとりがいる"
// // `g`フラグあり正規表現の場合は、繰り返し置換を行う
// console.log(str.replace(/にわ/g, "niwa")); // => "niwaにはniwaniwaとりがいる"

// // 検索対象となる文字列
// const str = "???";
// // replaceメソッドに文字列を指定した場合は、最初に一致したものだけが置換される
// console.log(str.replace("?", "!")); // => "!??"
// // replaceAllメソッドに文字列を指定した場合は、一致したものがすべて置換される
// console.log(str.replaceAll("?", "!")); // => "!!!"
// // replaceメソッドの場合は、正規表現の特殊文字はエスケープが必要となる
// console.log(str.replace(/\?/g, "!")); // => "!!!"
// // replaceAllメソッドにも正規表現を渡せるが、この場合はエスケープが必要となるためreplaceと同じ
// console.log(str.replaceAll(/\?/g, "!")); // => "!!!"

// function toDateJa(dateString) {
//     // パターンにマッチしたときのみ、コールバック関数で置換処理が行われる
//     return dateString.replace(/(\d{4})-(\d{2})-(\d{2})/g, (all, year, month, day) => {
//         // `all`には、マッチした文字列全体が入っているが今回は利用しない
//         // `all`が次の返す値で置換されるイメージ
//         return `${year}年${month}月${day}日`;

//     });
// }
// // マッチしない文字列の場合は、そのままの文字列が返る
// console.log(toDateJa("本日ハ晴天ナリ")); // => "本日ハ晴天ナリ"
// // マッチした場合は置換した結果を返す
// console.log(toDateJa("今日は2017-03-01です")); // => "今日は2017年03月01日です"

// // ベースURLとパスを結合した文字列を返す
// function baseJoin(baseURL, pathname) {
//     // 末尾に / がある場合は、/ を削除してから結合する
//     const stripSlashBaseURL = baseURL.replace(/\/$/, "");
//     return stripSlashBaseURL + pathname;
// }
// // `baseURL`と`pathname`にあるリソースを取得する
// function getResource(baseURL, pathname) {
//     const url = baseJoin(baseURL, pathname);
//     // baseURLの末尾に / があってもなくても同じ結果となる
//     console.log(url); // => "http://example.com/resouces/example.js"
//     // 省略) リソースを取得する処理...
// }
// const baseURL = "http://example.com/resouces/";
// const pathname = "/example.js";
// getResource(baseURL, pathname);

// // テンプレートを順番どおりに結合した文字列を返すタグ関数
// function stringRaw(strings, ...values) {

//     // // stringsは文字列のパーツが${}で区切られた配列となる
//     // console.log(strings); // => ["template "," literal ",""]
//     // // valuesには${}の評価値が順番に入る
//     // console.log(values); // => [0, 1]

//     // resultの初期値はstrings[0]の値となる
//     return strings.reduce((result, str, i) => {
//       console.log(result);
//       console.log(str);
//       console.log(i);
//         console.log([result, values[i - 1], str]);
//     //     // それぞれループで次のような出力となる
//     //     // 1度目: ["template ", 0, " literal "]
//     //     // 2度目: ["template 0 literal ", 1, ""]
//         return result + values[i - 1] + str;
//     });
// }
// // 関数`テンプレートリテラル` という形で呼び出す
// console.log(stringRaw`template ${0} literal ${1}`); // => "template 0 literal 1"

// // ??? タグ付きテンプレート関数は理解できなかったので、あとで再度学習！！！？？？ ???????????????????????????????

// // 文字列とUnicode
// console.log("あ".codePointAt(0));
// console.log(String.fromCodePoint(12354));
// console.log(String.fromCodePoint(0x3042));

// const codePointOfあ = "あ".codePointAt(0);

// const hexOfあ = codePointOfあ.toString(16);
// console.log(hexOfあ);
// console.log("\u{3042}");

// // 文字列をCode Unit(16進数)の配列にして返す
// function convertCodeUnits(str) {
//     const codeUnits = [];
//     for (let i = 0; i < str.length; i++) {
//         codeUnits.push(str.charCodeAt(i).toString(16));
//     }
//     return codeUnits;
// }
// // 文字列をCode Point(16進数)の配列にして返す
// function convertCodePoints(str) {
//     return Array.from(str).map(char => {
//         return char.codePointAt(0).toString(16);
//     });
// }

// const str = "リンゴ🍎";
// const codeUnits = convertCodeUnits(str);
// console.log(codeUnits); // => ["30ea", "30f3", "30b4", "d83c", "df4e"]
// const codePoints = convertCodePoints(str);
// console.log(codePoints); // => ["30ea", "30f3", "30b4", "1f34e"]

// // Code Unit（上位サロゲート + 下位サロゲート）
// console.log("\uD83C\uDF4E"); // => "🍎"
// // Code Point
// console.log("\u{1F34E}"); // => "🍎"

// // const [all, fish] = "𩸽のひらき".match(/(.)のひらき/);
// // console.log(all); // => "\ude3dのひらき"
// // console.log(fish); // => "\ude3d"

// const [all, fish] = "𩸽のひらき".match(/(.)のひらき/u);
// console.log(all); // => "𩸽のひらき"
// console.log(fish); // => "𩸽"

// // Code Pointごとの配列にする
// // Array.fromメソッドはIteratorを配列にする
// const codePoints = Array.from("リンゴ🍎");
// console.log(codePoints); // => ["リ", "ン", "ゴ", "🍎"]
// // Code Pointの個数を数える
// console.log(codePoints.length); // => 4

// // ラッパーオブジェクト
// // String#toUpperCaseを呼び出している
// {
// console.log("string".toUpperCase()); // => "STRING"

// // "input value"の値をラップしたStringのインスタンスを生成
// const str = new String("input value");
// // StringのインスタンスメソッドであるtoUpperCaseを呼び出す
// str.toUpperCase(); // => "INPUT VALUE"
// console.log(str.toUpperCase());
// }

// // プリミティブの文字列は"string"型
// {
// const str = "文字列";
// console.log(typeof str); // => "string"
// // ラッパーオブジェクトは"object"型
// const stringWrapper = new String("文字列");
// console.log(typeof stringWrapper); // => "object"
// }
// {
// const str = "string";
// // プリミティブ型の値に対してメソッド呼び出しを行う
// str.toUpperCase();
// // `str`へアクセスする際に"string"がラッパーオブジェクトへ変換され、
// // ラッパーオブジェクトはStringのインスタンスなのでメソッドを呼び出せる
// // つまり、上のコードは下のコードと同じ意味である
// (new String(str)).toUpperCase();
// }
// // const stringWrapper = new String("文字列");
// // // プリミティブ型の値を取得する
// // console.log(stringWrapper.valueOf()); // => "文字列"

// // 関数とスコープ
// {
//     // OUTERブロックスコープ
//     const x = "outer";
//     {
//         // INNERブロックスコープ
//         const x = "inner";
//         // 現在のスコープ(INNERブロックスコープ)にある`x`を参照する
//         console.log(x); // => "inner"
//     }
//     // 現在のスコープ(OUTERブロックスコープ)にある`x`を参照する
//     console.log(x); // => "outer"
// }

// // グローバル変数はどのスコープからも参照できる
// const globalVariable = "グローバル";
// // ブロックスコープ
// {
//     // ブロックスコープ内には該当する変数が定義されてない -> 外側のスコープへ
//     console.log(globalVariable); // => "グローバル"
// }
// // 関数スコープ
// function fn() {
//     // 関数ブロックスコープ内には該当する変数が定義されてない -> 外側のスコープへ
//     console.log(globalVariable); // => "グローバル"
// }
// fn();

// {
// console.log(x);
// let x = "letのx";
// }
// {
//   // var宣言より前に参照してもエラーにならない
// console.log(x); // => undefined
// var x = "varのx";
// }

// // 関数とthis
// "use strict";
// function outer() {
//     console.log(this); // => undefined
//     function inner() {
//         console.log(this); // => undefined
//     }
//     // `inner`関数呼び出しのベースオブジェクトはない
//     inner();
// }
// // `outer`関数呼び出しのベースオブジェクトはない
// outer();

// const person = {
//     fullName: "Brendan Eich",
//     sayName: function() {
//         // `person.fullName`と書いているのと同じ
//         return this.fullName;
//     }
// };
// // `person.fullName`を出力する
// console.log(person.sayName()); // => "Brendan Eich"

// // callメソッドを使用してthisを明示的に指定して関数を実行
// "use strict";
// function say(message) {
//     return `${message} ${this.fullName}！`;
// }
// const person = {
//     fullName: "Brendan Eich"
// };
// // `this`を`person`にして`say`関数を呼びだす
// console.log(say.call(person, "こんにちは")); // => "こんにちは Brendan Eich！"
// // `say`関数をそのまま呼び出すと`this`は`undefined`となるため例外が発生
// say("こんにちは"); // => TypeError: Cannot read property 'fullName' of undefined

// // applyメソッド（第一引数にthisを指定、第二引数に関数の引数を配列として渡す）
// "use strict";
// function say(message) {
//     return `${message} ${this.fullName}！`;
// }
// const person = {
//     fullName: "Brendan Eich"
// };
// // `this`を`person`にして`say`関数を呼びだす
// // callとは異なり引数を配列として渡す
// console.log(say.apply(person, ["こんにちは"])); // => "こんにちは Brendan Eich！"
// // `say`関数をそのまま呼び出すと`this`は`undefined`となるため例外が発生
// say("こんにちは"); // => TypeError: Cannot read property 'fullName' of undefined

// // callメソッドとapplyメソッドの違いは関数の引数への値の渡し方が異なるだけ
// // thisが不要な場合はnullを渡す
// function add(x, y) {
//     return x + y;
// }
// // `this`が不要な場合は、nullを渡す
// console.log(add.call(null, 1, 2)); // => 3
// console.log(add.apply(null, [1, 2])); // => 3

// "use strict";
// const Prefixer = {
//     prefix: "pre",
//     prefixArray(strings) {
//         // `that`は`prefixArray`メソッド呼び出しにおける`this`となる
//         // つまり`that`は`Prefixer`オブジェクトを参照する
//         const that = this;
//         return strings.map(function(str) {
//             // `this`ではなく`that`を参照する
//             return that.prefix + "-" + str;
//         });
//     }
// };
// // `prefixArray`メソッドにおける`this`は`Prefixer`
// const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
// console.log(prefixedStrings); // => ["pre-a", "pre-b", "pre-c"]

// "use strict";
// const Prefixer = {
//     prefix: "pre",
//     prefixArray(strings) {
//         return strings.map((str) => {
//             // Arrow Function自体は`this`を持たない
//             // `this`は外側の`prefixArray`関数が持つ`this`を参照する
//             // そのため`this.prefix`は"pre"となる
//             return this.prefix + "-" + str;
//         });
//     }
// };
// // このとき、`prefixArray`のベースオブジェクトは`Prefixer`となる
// // つまり、`prefixArray`メソッド内の`this`は`Prefixer`を参照する
// const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
// console.log(prefixedStrings); // => ["pre-a", "pre-b", "pre-c"]

// // クラス
// // class MyClass {
//   constructon() {
//     // コンストラクタ関数の処理
//     // インスタンス化されるときに自動的に呼び出される
//   }
// }

// // クラスのインスタンス化
// class MyClass {
// }
// // `MyClass`をインスタンス化する
// const myClass = new MyClass();
// // 毎回新しいインスタンス(オブジェクト)を作成する
// const myClassAnother = new MyClass();
// // それぞれのインスタンスは異なるオブジェクト
// console.log(myClass === myClassAnother); // => false
// // クラスのインスタンスかどうかは`instanceof`演算子で判定できる
// console.log(myClass instanceof MyClass); // => true
// console.log(myClassAnother instanceof MyClass); // => true

// // 非推奨の例: コンストラクタで値を返すべきではない
// class Point {
//     constructor(x, y) {
//         // `this`の代わりにただのオブジェクトを返せる
//         return { x, y };
//     }
// }

// // `new`演算子の結果はコンストラクタ関数が返したただのオブジェクト
// const point = new Point(3, 4);
// console.log(point); // => { x: 3, y: 4 }
// // Pointクラスのインスタンスではない
// console.log(point instanceof Point); // => false

// // クラスのアクセッサプロパティの定義
// class NumberWrapper {
//     constructor(value) {
//         this._value = value;
//     }
//     // `_value`プロパティの値を返すgetter
//     get value() {
//         console.log("getter");
//         return this._value;
//     }
//     // `_value`プロパティに値を代入するsetter
//     set value(newValue) {
//         console.log("setter");
//         this._value = newValue;
//     }
// }

// const numberWrapper = new NumberWrapper(1);
// // "getter"とコンソールに表示される
// console.log(numberWrapper.value); // => 1
// // "setter"とコンソールに表示される
// numberWrapper.value = 42;
// // "getter"とコンソールに表示される

// /**
//  * 配列のようなlengthを持つクラス
//  */
// class ArrayLike {
//     constructor(items = []) {
//         this._items = items;
//     }

//     get items() {
//         return this._items;
//     }

//     get length() {
//         return this._items.length;
//     }

//     set length(newLength) {
//         const currentItemLength = this.items.length;
//         // 現在要素数より小さな`newLength`が指定された場合、指定した要素数となるように末尾を削除する
//         if (newLength < currentItemLength) {
//             this._items = this.items.slice(0, newLength);
//         } else if (newLength > currentItemLength) {
//             // 現在要素数より大きな`newLength`が指定された場合、指定した要素数となるように末尾に空要素を追加する
//             this._items = this.items.concat(new Array(newLength - currentItemLength));
//         }
//     }
// }

// const arrayLike = new ArrayLike([1, 2, 3, 4, 5]);
// // 要素数を減らすとインデックス以降の要素が削除される
// arrayLike.length = 2;
// console.log(arrayLike.items.join(", ")); // => "1, 2"
// // 要素数を増やすと末尾に空要素が追加される
// arrayLike.length = 5;
// console.log(arrayLike.items.join(", ")); // => "1, 2, , , "

// class ArrayWrapper {
//     constructor(array = []) {
//         this.array = array;
//     }

//     // rest parametersとして要素を受けつける
//     static of(...items) {
//         return new ArrayWrapper(items);
//     }

//     get length() {
//         return this.array.length;
//     }
// }

// // 配列を引数として渡している
// const arrayWrapperA = new ArrayWrapper([1, 2, 3]);
// // 要素を引数として渡している
// const arrayWrapperB = ArrayWrapper.of(1, 2, 3);
// console.log(arrayWrapperA);
// console.log(arrayWrapperB);
// console.log(arrayWrapperA.length); // => 3
// console.log(arrayWrapperB.length); // => 3

// class ArrayWrapper {
//     constructor(array = []) {
//         this.array = array;
//         console.log(array);
//     }

//     static of(...items) {
//         // `this`は`ArrayWrapper`を参照する
//         return new this(items);
//     }

//     get length() {
//         return this.array.length;
//     }
// }

// const arrayWrapper = ArrayWrapper.of(1, 2, 3);
// console.log(arrayWrapper);
// console.log(arrayWrapper.length); // => 3

// class ConflictClass {
//     constructor() {
//         // インスタンスオブジェクトに`method`を定義
//         this.method = () => {
//             console.log("インスタンスオブジェクトのメソッド");
//         };
//     }

//     // クラスのプロトタイプメソッドとして`method`を定義
//     method() {
//         console.log("プロトタイプのメソッド");
//     }
// }

// const conflict = new ConflictClass();
// conflict.method(); // どちらの`method`が呼び出される？
// console.log(conflict);
// console.log(typeof ConflictClass.prototype);

// // インスタンスの`method`プロパティを削除
// delete conflict.method;
// conflict.method(); // "プロトタイプメソッド"
// console.log(conflict);
// console.log(typeof ConflictClass.prototype);

// function fn() {
// }
// // `prototype`プロパティにプロトタイプオブジェクトが存在する
// console.log(typeof fn.prototype === "object"); // => true

// class MyClass {
// }
// // `prototype`プロパティにプロトタイプオブジェクトが存在する
// console.log(typeof MyClass.prototype === "object"); // => true

// class MyClass {
//     method() { }
// }

// console.log(typeof MyClass.prototype.method === "function"); // => true
// // クラス#constructorはクラス自身を参照する
// console.log(MyClass.prototype.constructor === MyClass); // => true

// // プロトタイプチェーンの動作の疑似的なコード
// class MyClass {
//     method() {
//         console.log("プロトタイプのメソッド");
//     }
// }
// const instance = new MyClass();
// // `instance.method()`を実行する場合
// // 次のような呼び出し処理が行われている
// // インスタンス自身が`method`プロパティを持っている場合
// if (instance.hasOwnProperty("method")) {
//     instance.method();
// } else {
//     // インスタンスの`[[Prototype]]`の参照先（`MyClass`のプロトタイプオブジェクト）を取り出す
//     const prototypeObject = Object.getPrototypeOf(instance);
//     // プロトタイプオブジェクトが`method`プロパティを持っている場合
//     if (prototypeObject.hasOwnProperty("method")) {
//         // `this`はインスタンス自身を指定して呼び出す
//         prototypeObject.method.call(instance);
//     }
// }

// 親クラス
// class Parent {
//     constructor(...args) {
//         console.log("Parentコンストラクタの処理", ...args);
//     }
// }
// // Parentを継承したChildクラスの定義
// class Child extends Parent {
//     constructor(...args) {
//         // Parentのコンストラクタ処理を呼び出す
//         super(...args);
//         console.log("Childコンストラクタの処理", ...args);
//     }
// }
// const child = new Child("引数1", "引数2");
// // "Parentコンストラクタの処理", "引数1", "引数2"
// // "Childコンストラクタの処理", "引数1", "引数2"

// class Parent {
//     static method() {
//         console.log("Parent.method");
//     }
// }
// class Child extends Parent {
//     static method() {
//         console.log("Child.method");
//         // `super.method()`で`Parent.method`を呼びだす
//         super.method();
//     }
// }
// Child.method();
// // コンソールには次のように出力される
// // "Child.method"
// // "Parent.method"

// class MyArray extends Array {
//     get first() {
//         if (this.length === 0) {
//             return undefined;
//         } else {
//             return this[0];
//         }
//     }

//     get last() {
//         if (this.length === 0) {
//             return undefined;
//         } else {
//             return this[this.length - 1];
//         }
//     }
// }

// // Arrayを継承しているのでArray.fromも継承している
// // Array.fromはIterableなオブジェクトから配列インスタンスを作成する
// const array = MyArray.from([1, 2, 3, 4, 5]);
// console.log(array.length); // => 5
// console.log(array.first); // => 1
// console.log(array.last); // => 5

// // 例外処理
// try {
//     console.log("try節:この行は実行されます");
//     // 未定義の関数を呼び出してReferenceError例外が発生する
//     undefinedFunction();
//     // 例外が発生したため、この行は実行されません
// } catch (error) {
//     // 例外が発生したあとはこのブロックが実行される
//     console.log("catch節:この行は実行されます");
//     console.log(error instanceof ReferenceError); // => true
//     console.log(error.message); // => "undefinedFunction is not defined"
// } finally {
//     // このブロックは例外の発生に関係なく必ず実行される
//     console.log("finally節:この行は実行されます");
// }

// try {
//     // 例外を投げる
//     throw new Error("例外が投げられました");
// } catch (error) {
//     // catch節のスコープでerrorにアクセスできる
//     console.log(error.message); // => "例外が投げられました"
// }

// // #22 非同期処理：コールバック／Promese／Async Function----------------------------------
// // 指定した`timeout`ミリ秒経過するまで同期的にブロックする関数
// function blockTime(timeout) {
//     const startTime = Date.now();
//     // `timeout`ミリ秒経過するまで無限ループをする
//     while (true) {
//         const diffTime = Date.now() - startTime;
//         if (diffTime >= timeout) {
//             return; // 指定時間経過したら関数の実行を終了
//         }
//     }
// }
// console.log("処理を開始");
// blockTime(5000); // 他の処理を1000ミリ秒（1秒間）ブロックする
// console.log("この行が呼ばれるまで処理が1秒間ブロックされる");

// // 指定した`timeout`ミリ秒経過するまで同期的にブロックする関数
// function blockTime(timeout) {
//     const startTime = Date.now();
//     while (true) {
//         const diffTime = Date.now() - startTime;
//         if (diffTime >= timeout) {
//             return; // 指定時間経過したら関数の実行を終了
//         }
//     }
// }

// console.log("1. setTimeoutのコールバック関数を10ミリ秒後に実行します");
// setTimeout(() => {
//     console.log("3. ブロックする処理を開始します");
//     blockTime(5000); // 他の処理を5秒間ブロックする
//     console.log("4. ブロックする処理が完了しました");
// }, 10);
// // ブロックする処理は非同期なタイミングで呼び出されるので、次の行が先に実行される
// console.log("2. 同期的な処理を実行します");

// // 指定した`timeout`ミリ秒経過するまで同期的にブロックする関数
// function blockTime(timeout) {
//     const startTime = Date.now();
//     while (true) {
//         const diffTime = Date.now() - startTime;
//         if (diffTime >= timeout) {
//             return; // 指定時間経過したら関数の実行を終了
//         }
//     }
// }

// const startTime = Date.now();
// // 10ミリ秒後にコールバック関数を呼び出すようにタイマーに登録する
// setTimeout(() => {
//     const endTime = Date.now();
//     console.log(`非同期処理のコールバックが呼ばれるまで${endTime - startTime}ミリ秒かかりました`);
// }, 10);
// console.log("ブロックする処理を開始します");
// blockTime(1000); // 1秒間処理をブロックする
// console.log("ブロックする処理が完了しました");

// try {
//     setTimeout(() => {
//         throw new Error("非同期的なエラー");
//     }, 10);
// } catch (error) {
//      console.log("非同期エラーはキャッチできないため、この行は実行されません");
// }
// console.log("この行は実行されます");

// // 非同期処理の外
// setTimeout(() => {
//     // 非同期処理の中
//     try {
//         throw new Error("エラー");
//     } catch (error) {
//         console.log("エラーをキャッチできる");
//     }
// }, 10);
// console.log("この行は実行されます");

// // エラーファーストコールバック
// /**
//  * 1000ミリ秒未満のランダムなタイミングでレスポンスを疑似的にデータ取得する関数
//  * 指定した`path`にデータがある場合は`callback(null, レスポンス)`を呼ぶ
//  * 指定した`path`にデータがない場合は`callback(エラー)`を呼ぶ
//  */
// function dummyFetch(path, callback) {
//     setTimeout(() => {
//         // /success からはじまるパスにはリソースがあるという設定
//         if (path.startsWith("/success")) {
//             callback(null, { body: `Response body of ${path}` });
//         } else {
//             callback(new Error("NOT FOUND"));
//         }
//     }, 1000 * Math.random());
// }

// Promise#then と Promise#catch
/**
 * 1000ミリ秒未満のランダムなタイミングでレスポンスを疑似的にデータ取得する関数
 * 指定した`path`にデータがある場合、成功として**Resolved**状態のPromiseオブジェクトを返す
 * 指定した`path`にデータがない場合、失敗として**Rejected**状態のPromiseオブジェクトを返す
 */
// function dummyFetch(path) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (path.startsWith("/success")) {
//                 resolve({ body: `Response body of ${path}` });
//             } else {
//                 reject(new Error("NOT FOUND"));
//             }
//         }, 1000 * Math.random());
//     });
// }
// // `then`メソッドで成功時と失敗時に呼ばれるコールバック関数を登録
// // /success/data のリソースは存在するので成功しonFulfilledが呼ばれる
// dummyFetch("/success/data").then(function onFulfilled(response) {
//     console.log(response); // => { body: "Response body of /success/data" }
// }, function onRejected(error) {
//     // この行は実行されません
// });
// // /failure/data のリソースは存在しないのでonRejectedが呼ばれる
// dummyFetch("/failure/data").then(function onFulfilled(response) {
//     // この行は実行されません
// }, function onRejected(error) {
//     console.log(error); // Error: "NOT FOUND"
// });

// // /success/data にリソースが存在するので、`response`にはデータが入る
// dummyFetch("/success/data", (error, response) => {
//     if (error) {
//         // この行は実行されません
//     } else {
//         console.log(response); // => { body: "Response body of /success/data" }
//     }
// });
// // /failure/data にリソースは存在しないので、`error`にはエラーオブジェクトが入る
// dummyFetch("/failure/data", (error, response) => {
//     if (error) {
//         console.log(error.message); // => "NOT FOUND"
//     } else {
//         // この行は実行されません
//     }
// });

// /**
//  * リソースの取得に成功した場合は`successCallback(レスポンス)`を呼び出す
//  * リソースの取得に失敗した場合は`failureCallback(エラー)`を呼び出す
//  */
// function dummyFetch(path, successCallback, failureCallback) {
//     setTimeout(() => {
//         if (path.startsWith("/success")) {
//             successCallback({ body: `Response body of ${path}` });
//         } else {
//             failureCallback(new Error("NOT FOUND"));
//         }
//     }, 1000 * Math.random());
// }

// function delay(timeoutMs) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, timeoutMs);
//     });
// }
// // `then`メソッドで成功時のコールバック関数だけを登録
// delay(10).then(() => {
//     console.log("10ミリ秒後に呼ばれる");
// });

// promiseの状態
// const promise = new Promise((resolve, reject) => {
//     // 非同期でresolveする
//     setTimeout(() => {
//         resolve();
//         // すでにresolveされているため無視される
//         reject(new Error("エラー"));
//     }, 16);
// });
// promise.then(() => {
//     console.log("Fulfilledとなった");
// }, (error) => {
//     // この行は呼び出されない
// });

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve();
//         resolve(); // 二度目以降のresolveやrejectは無視される
//     }, 16);
// });
// promise.then(() => {
//     console.log("最初のresolve時に一度だけ呼ばれる");
// }, (error) => {
//     // この行は呼び出されない
// });

// // Promise.resolve

// // const fulfilledPromise = Promise.resolve(); と同じ意味
// const fulfilledPromise = new Promise((resolve) => {
//     resolve();
// });

// const promise = Promise.resolve();
// promise.then(() => {
//     console.log("2. コールバック関数が実行されました");
// });
// console.log("1. 同期的な処理が実行されました");

// const promise = new Promise((resolve) => {
//     console.log("1. resolveします");
//     resolve();
// });
// promise.then(() => {
//     console.log("3. コールバック関数が実行されました");
// });
// console.log("2. 同期的な処理が実行されました");

// Promiseチェーン
//
// // console.log(Math.random());
// function asyncTask() {
//     return Math.random() > 0.5
//          ? Promise.resolve("成功")
//         : Promise.reject(new Error("失敗"));
// }

// // asyncTask関数は新しい`Promise`インスタンスを返す
// asyncTask()
//       // thenメソッドは新しい`Promise`インスタンスを返す
//     .then(function onFulfilled(value) {
//         console.log(value); // => "成功"
//     })
//     // catchメソッドは新しい`Promise`インスタンスを返す
//     .catch(function onRejected(error) {
//         console.log(error.message); // => "失敗"
//     });

// Promise.reject(new Error("エラー")).catch(error => {
//     console.log(error); // Error: エラー
// }).then(() => {
//     console.log("thenのコールバック関数が呼び出される");
// });

// function main() {
//     return Promise.reject(new Error("エラー"));
// }
// // mainはRejectedなPromiseを返す
// main().catch(error => {
//     // asyncFunctionで発生したエラーのログを出力する
//     console.log(error);
//     // Promiseチェーンはそのままエラーを継続させる
//     return Promise.reject(error);
// }).then(() => {
//     // 前のcatchでRejectedなPromiseが返されたため、この行は実行されません
// }).catch(error => {
//     console.log("メインの処理が失敗した");
// });

// // `promise`にはResolvedまたはRejectedなPromiseインスタンスがランダムで入る
// const promise = Math.random() < 0.5 ? Promise.resolve() : Promise.reject();
// promise.then(() => {
//     console.log("Promise#then");
// }).catch((error) => {
//     console.log("Promise#catch");
// }).finally(() => {
//     // 成功、失敗どちらの場合でも呼び出される
//     console.log("Promise#finally");
// });

// function dummyFetch(path) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (path.startsWith("/resource")) {
//                 resolve({ body: `Response body of ${path}` });
//             } else {
//                 reject(new Error("NOT FOUND"));
//             }
//         }, 1000 * Math.random());
//     });
// }
// // リソースを取得中かどうかのフラグ
// let isLoading = true;
// dummyFetch("/resource/A").then(response => {
//     console.log(response);
// }).catch(error => {
//     console.error(error);
// }).finally(() => {
//     isLoading = false;
//     console.log("Promise#finally");
// });

// Promiseチェーンで逐次処理

// function dummyFetch(path) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (path.startsWith("/resource")) {
//                 resolve({ body: `Response body of ${path}` });
//             } else {
//                 reject(new Error("NOT FOUND"));
//             }
//         }, 1000 * Math.random());
//     });
// }

// const results = [];
// // Resource Aを取得する
// dummyFetch("/resource/A").then(response => {
//     results.push(response.body);
//     // Resource Bを取得する
//     return dummyFetch("/resource/B");
// }).then(response => {
//     results.push(response.body);
// }).then(() => {
//     console.log(results); // => ["Response body of /resource/A", "Response body of /resource/B"]
// });

// // `timeoutMs`ミリ秒後にresolveする
// function delay(timeoutMs) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(timeoutMs);
//         }, timeoutMs);
//     });
// }
// const promise1 = delay(1000);
// const promise2 = delay(200);
// const promise3 = delay(300);

// Promise.all([promise1, promise2, promise3]).then(function(values) {
//     console.log(values); // => [1, 2, 3]
// });

// function dummyFetch(path) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (path.startsWith("/resource")) {
//                 resolve({ body: `Response body of ${path}` });
//             } else {
//                 reject(new Error("NOT FOUND"));
//             }
//         }, 1000 * Math.random());
//     });
// }

// const fetchedPromise = Promise.all([
//     dummyFetch("/resource/A"),
//     dummyFetch("/resource/B")
// ]);
// // fetchedPromiseの結果をDestructuringでresponseA, responseBに代入している
// fetchedPromise.then(([responseA, responseB]) => {
//     console.log(responseA.body); // => "Response body of /resource/A"
//     console.log(responseB.body); // => "Response body of /resource/B"
// });

// // Promise.race
// // `timeoutMs`ミリ秒後にresolveする
// function delay(timeoutMs) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(timeoutMs);
//         }, timeoutMs);
//     });
// }
// // 1つでもresolveまたはrejectした時点で次の処理を呼び出す
// const racePromise = Promise.race([
//     delay(1),
//     delay(32),
//     delay(64),
//     delay(128)
// ]);
// racePromise.then(value => {
//     // もっとも早く完了するのは1ミリ秒後
//     console.log(value); // => 1
// });

// // `timeoutMs`ミリ秒後にrejectする
// function timeout(timeoutMs) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error(`Timeout: ${timeoutMs}ミリ秒経過`));
//         }, timeoutMs);
//     });
// }
// function dummyFetch(path) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (path.startsWith("/resource")) {
//                 resolve({ body: `Response body of ${path}` });
//             } else {
//                 reject(new Error("NOT FOUND"));
//             }
//         }, 1000 * Math.random());
//     });
// }
// // 500ミリ秒以内に取得できなければ失敗時の処理が呼ばれる
// Promise.race([
//     dummyFetch("/resource/data"),
//     timeout(500),
// ]).then(response => {
//     console.log(response.body); // => "Response body of /resource/data"
// }).catch(error => {
//     console.log(error.message); // => "Timeout: 500ミリ秒経過"
// });

// Async Function------------------------------------------------------------
// async function doAsync() {
//     return "値";
// }
// // doAsync関数はPromiseを返す
// doAsync().then(value => {
//     console.log(value); // => "値"
// });

// async function doAsync() と function doAsync() は同じ意味になる！
// 通常の関数でPromiseインスタンスを返している
// function doAsync() {
//     return Promise.resolve("値");
// }
// doAsync().then(value => {
//     console.log(value); // => "値"
// });

// Async Function definition ------------

// // Async Function returns a Promise -----------
// // 1. resolveFnは値を返している
// // 何もreturnしていない場合はundefinedを返したのと同じ扱いとなる
// async function resolveFn() {
//     return "返り値";
// }
// resolveFn().then(value => {
//     console.log(value); // => "返り値"
// });

// // 2. rejectFnはPromiseインスタンスを返している
// async function rejectFn() {
//     return Promise.reject(new Error("エラーメッセージ"));
// }

// // rejectFnはRejectedなPromiseを返すのでcatchできる
// rejectFn().catch(error => {
//     console.log(error.message); // => "エラーメッセージ"
// });

// // 3. exceptionFnは例外を投げている
// async function exceptionFn() {
//     throw new Error("例外が発生しました");
//     // 例外が発生したため、この行は実行されません
// }

// // Async Functionで例外が発生するとRejectedなPromiseが返される
// exceptionFn().catch(error => {
//     console.log(error.message); // => "例外が発生しました"
// });

// await expression -----------

// // Express a promise chain with an await expression
// function dummyFetch(path) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (path.startsWith("/resource")) {
//                 resolve({ body: `Response body of ${path}` });
//             } else {
//                 reject(new Error("NOT FOUND"));
//             }
//         }, 1000 * Math.random());
//     });
// }
// // リソースAとリソースBを順番に取得する
// async function fetchAB() {
//     const results = [];
//     const responseA = await dummyFetch("/resource/A");
//     results.push(responseA.body);
//     const responseB = await dummyFetch("/resource/B");
//     results.push(responseB.body);
//     return results;
// }
// // リソースを取得して出力する
// fetchAB().then((results) => {
//     console.log(results); // => ["Response body of /resource/A", "Response body of /resource/B"]
// });

// // Async Function and iterative processing---------------
// function dummyFetch(path) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (path.startsWith("/resource")) {
//                 resolve({ body: `Response body of ${path}` });
//             } else {
//                 reject(new Error("NOT FOUND"));
//             }
//         }, 1000 * Math.random());
//     });
// }
// // 複数のリソースを順番に取得する
// async function fetchResources(resources) {
//     const results = [];
//     for (let i = 0; i < resources.length; i++) {
//         const resource = resources[i];
//         // ループ内で非同期処理の完了を待っている
//         const response = await dummyFetch(resource);
//         results.push(response.body);
//     }
//     // 反復処理がすべて終わったら結果を返す(返り値となるPromiseを`results`でresolveする)
//     return results;
// }
// // 取得したいリソースのパス配列
// const resources = [
//     "/resource/A",
//     "/resource/B"
// ];
// // リソースを取得して出力する
// fetchResources(resources).then((results) => {
//     console.log(results); // => ["Response body of /resource/A", "Response body of /resource/B"]
// });

// // Combine Async Function and Promise API---------------------
// function dummyFetch(path) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (path.startsWith("/resource")) {
//                 resolve({ body: `Response body of ${path}` });
//             } else {
//                 reject(new Error("NOT FOUND"));
//             }
//         }, 1000 * Math.random());
//     });
// }
// // 複数のリソースをまとめて取得する
// async function fetchAllResources(resources) {
//     // リソースを同時に取得する
//     const promises = resources.map(function(resource) {
//         return dummyFetch(resource);
//     });
//     // すべてのリソースが取得できるまで待つ
//     // Promise.allは [ResponseA, ResponseB] のように結果が配列となる
//     const responses = await Promise.all(promises);
//     // 取得した結果からレスポンスのボディだけを取り出す
//     return responses.map((response) => {
//         return response.body;
//     });
// }
// const resources = [
//     "/resource/A",
//     "/resource/B"
// ];
// // リソースを取得して出力する
// fetchAllResources(resources).then((results) => {
//     console.log(results); // => ["Response body of /resource/A", "Response body of /resource/B"]
// });

// // await expressions are only available in Async Function-----------------------

// function dummyFetch(path) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (path.startsWith("/resource")) {
//                 resolve({ body: `Response body of ${path}` });
//             } else {
//                 reject(new Error("NOT FOUND"));
//             }
//         }, 1000 * Math.random());
//     });
// }
// // リソースを順番に取得する
// async function fetchResources(resources) {
//     const results = [];
//     console.log("1. fetchResourcesを開始");
//     resources.forEach(async function(resource) {
//         console.log(`2. ${resource}の取得開始`);
//         const response = await dummyFetch(resource);
//         // `dummyFetch`が完了するのは、`fetchResources`関数が返したPromiseが解決された後
//         console.log(`5. ${resource}の取得完了`);
//         results.push(response.body);
//     });
//     console.log("3. fetchResourcesを終了");
//     return results;
// }
// const resources = ["/resource/A", "/resource/B"];
// // リソースを取得して出力する
// fetchResources(resources).then((results) => {
//     console.log("4. fetchResourcesの結果を取得");
//     console.log(results); // => []
// });

// // Map/Set----------------------
// const map = new Map([["key1", "value1"], ["key2", "value2"]]);
// // 2つのエントリーで初期化されている
// console.log(map);
// map.set("key3", "value3");
// console.log(map.size); // => 3
// map.set("key3", "value30");
// console.log(map.get("key3")); // => "value2"
// // キーの存在確認
// console.log(map.has("key3")); // => true
// console.log(map.has("foo")); // => false
// map.delete("key3");
// console.log(map.size); // => 2
// // map.clear();
// // console.log(map.size); // => 0

// // Mapが持つ要素を列挙するメソッド→forEach/keys/values/entries
// // forEachメソッド
// const results = [];
// map.forEach((value, key) => {
//     results.push(`${key}:${value}`);
// });
// console.log(results); // => ["key1:value1","key2:value2"]

// // keysメソッド
// const keys = [];
// // (for...of文で)keysメソッドの返り値(Iterator)を反復処理する
// for (const key of map.keys()) {
//     keys.push(key);
// }
// console.log(keys); // => ["key1","key2"]
// // keysメソッドの返り値(Iterator)から配列を作成する
// const keysArray = Array.from(map.keys());
// console.log(keysArray); // => ["key1","key2"]

// // entries
// const entries = [];
// for (const [key, value] of map.entries()) {
//     entries.push(`${key}:${value}`);
// }
// console.log(entries); // => ["key1:value1","key2:value2"]

// // map自身もiterableなので、for...of文で反復処理できる
// for (const [key, value] of map) {
//     results.push(`${key}:${value}`);
// }
// console.log(results); // => ["key1:value1","key2:value2","key1:value1","key2:value2"]

// ショッピングカートを表現するクラス
// class ShoppingCart {
//   constructor() {
//     // 商品とその数を持つマップ
//     this.items = new Map();
//   }
//     // カートに商品を追加する
//   addItem(item) {
//     // `item`がない場合は`undefined`を返すため、Nullish coalescing演算子(`??`)を使いデフォルト値として`0`を設定する
//     const count = this.items.get(item) ?? 0;
//     this.items.set(item, count + 1);
//   }
//     // カート内の合計金額を返す
//   getTotalPrice() {
//     return Array.from(this.items).reduce((total, [item, count]) => {
//         return total + item.price * count;
//     }, 0);
//   }
//    // カートの中身を文字列にして返す
//     toString() {
//         return Array.from(this.items).map(([item, count]) => {
//             return `${item.name}:${count}`;
//         }).join(",");
//     }
// }
// const shoppingCart = new ShoppingCart();
// // 商品一覧
// const shopItems = [
//   { name: "みかん", price: 100 },
//   { name: "リンゴ", price: 200 },
// ];

// // カートに商品を追加する
// shoppingCart.addItem(shopItems[0]);
// shoppingCart.addItem(shopItems[0]);
// shoppingCart.addItem(shopItems[1]);

// // 合計金額を表示する
// console.log(shoppingCart.getTotalPrice()); // => 400
// // カートの中身を表示する
// console.log(shoppingCart.toString()); // => "みかん:2,リンゴ:1"

// // WeakMap-------------------------------
// // イベントリスナーを管理するマップ
// const listenersMap = new WeakMap();

// class EventEmitter {
//     addListener(listener) {
//         // this にひもづいたリスナーの配列を取得する
//         const listeners = listenersMap.get(this) ?? [];
//         const newListeners = listeners.concat(listener);
//         // this をキーに新しい配列をセットする
//         listenersMap.set(this, newListeners);
//     }
// }

// // 上記クラスの実行例

// let eventEmitter = new EventEmitter();
// // イベントリスナーを追加する
// eventEmitter.addListener(() => {
//     console.log("イベントが発火しました");
// });
// // eventEmitterへの参照がなくなったことで自動的にイベントリスナーが解放される
// eventEmitter = null;

// const cache = new WeakMap();

// function getHeight(element) {
//     if (cache.has(element)) {
//         return cache.get(element);
//     }
//     const height = element.getBoundingClientRect().height;
//     // elementオブジェクトに対して高さをひもづけて保存している
//     cache.set(element, height);
//     return height;
// }

// // Set セットとは、重複する値がないことを保証したコレクションのこと forEachメソッド使用可---------------------
// iteratorオブジェクト作成メソッド keys/values/entries が使用可
// const set = new Set();
// set.add("a");
// set.add("b");
// console.log(set.size); // => 2
// set.delete("a");
// console.log(set.size); // => 1
// set.clear();
// console.log(set.size); // => 0

// iteratorオブジェクト作成メソッド keys/values/entries が使用可−−−−−−−−−

// const set = new Set(["a", "b"]);
// const results = [];
// set.forEach((value) => {
//     results.push(value);
// });
// console.log(results); // => ["a","b"]

// const keysResults = [];
// for (const value of set.keys()) {
//     keysResults.push(value);
// }
// console.log(keysResults); // => ["a","b"]
// // entriesで列挙
// const entryResults = [];
// for (const entry of set.entries()) {
//     // entryは[値, 値]という配列
//     entryResults.push(entry);
// }
// console.log(entryResults); // => [["a","a"], ["b", "b"]]

// // Setオブジェクト自身もiterableなオブジェクトであるため、for...of文で反復処理可能------------------
// const set = new Set(["a", "b"]);
// const results = [];
// for (const value of set) {
//     results.push(value);
// }
// console.log(results); // => ["a","b"]

// #24 JSON JavaScript Object Notation-------------------------------
// JSONはダブルクォートのみを許容するため、シングルクォートでJSON文字列を記述
// {
//     "object": {
//         "number": 1,
//         "string": "js-primer",
//         "boolean": true,
//         "null": null,
//         "array": [1, 2, 3]
//     }
// }
// {
// const json = '{ "id": 1, "name": "js-primer" }';
// const obj = JSON.parse(json);
// console.log(obj.id); // => 1
// console.log(obj.name); // => "js-primer"

// const userInput = "not json value";
// try {
//     const json = JSON.parse(userInput);
// } catch (error) {
//     console.log("パースできませんでした");
// }
// }

// const obj = { id: 1, name: "js-primer", bio: null };
// console.log(JSON.stringify(obj)); // => '{"id":1,"name":"js-primer","bio":null}'

// // #25 Date -----------------------------
// // 現在の時刻を表すインスタンスを作成する
// const now = new Date();
// // 時刻値だけが欲しい場合にはDate.nowメソッドを使う
// console.log(Date.now());

// // 時刻値を取得する
// console.log(now.getTime());
// // 時刻をISO 8601形式の文字列で表示する
// console.log(now.toISOString());

// // YYYY/MM/DD形式の文字列に変換する関数
// function formatDate(date) {
//     const yyyy = String(date.getFullYear());
//     // String#padStartメソッド（ES2017）で2桁になるように0埋めする
//     const mm = String(date.getMonth() + 1).padStart(2, "0");
//     const dd = String(date.getDate()).padStart(2, "0");
//     return `${yyyy}/${mm}/${dd}`;
// }

// const date = new Date("2006-01-02T15:04:05.999");
// console.log(formatDate(date)); // => "2006/01/02"

// // getTimezoneOffsetはインスタンスメソッドなので、インスタンスが必要
// // const now = new Date();
// // 時間単位にしたタイムゾーンオフセット
// const timezoneOffsetInHours = now.getTimezoneOffset() / 60;
// // UTCの現在の時間を計算できる
// console.log(`Hours in UTC: ${now.getHours() + timezoneOffsetInHours}`);

// // #26 Math ------------------------------
// console.log(Math.PI);
// const rad90 = Math.PI * 90 / 180;
// console.log(rad90);
// const sin90 = Math.sin(rad90);
// console.log(sin90); // => 1

// for (let i = 0; i < 5; i++) {
//     // 毎回ランダムな浮動小数点数を返す
//     console.log(Math.random());
// }

// // minからmaxまでの乱数を返す関数
// function getRandom(min, max) {
//     return Math.random() * (max - min) + min;
// }
// // 1以上5未満の浮動小数点数を返す
// console.log(getRandom(1, 5));

// // 数値を整数にする
// // 底関数
// console.log(Math.floor(1.3)); // => 1
// console.log(Math.floor(-1.3)); // => -2
// // 天井関数
// console.log(Math.ceil(1.3)); // => 2
// console.log(Math.ceil(-1.3)); // => -1
// // 四捨五入
// console.log(Math.round(1.3)); // => 1
// console.log(Math.round(1.6)); // => 2
// console.log(Math.round(-1.3)); // => -1
// // 単純に小数部分を切り落とす
// console.log(Math.trunc(1.3)); // => 1 Math.floor と同じ処理になる
// console.log(Math.trunc(-1.3)); // => -1 Math.ceil と同じ処理になる

// // [ES2015]ECMAScriptモジュール
// // 構文
// // 名前付きエクスポート／インポート
// const foo = "foo";
// // 宣言済みのオブジェクトを名前つきエクスポートする
// export { foo };
// // 宣言と同時に名前つきエクスポートする
// export function bar() { };
// // 名前つきエクスポートされたfooとbarをインポートする
// import { foo, bar } from "./my-module.js";
// console.log(foo); // => "foo"
// console.log(bar); // => "bar"

// const internalFoo = "foo";
// // internalFoo変数をfooとして名前つきエクスポートする
// export { internalFoo as foo };

// 第二部 応用編 #1 アプリケーション開発の準備 ----------------------
// eslint-disable-next-line no-console
console.log('index.js: loaded');

// #2 Ajax通信 ---------------------------------------
// #3 Node.jsでCLIアプリ ------------------------------
// #4 Todoアプリ ------------------------------------
// airBnB のESlint設定

// paiza 入力メソッド-----------------------------
// var lines = [];
// var reader = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// reader.on('line', (line) => {
//   lines.push(line);
// });
// reader.on('close', () => {
//   console.log(lines[0]);
// });
// function htmlToElement(html) {
//     const template = document.createElement("template");
//     template.innerHTML = html;
//     return template.content.firstElementChild;
// }

// function element(strings, ...values) {
//   console.log(strings);
//   console.log(values);
//     const htmlString = strings.reduce((result, str, i) => {
//       console.log([result]);
//         const value = values[i - 1];
//         console.log(value);
//         if (typeof value === "string") {
//           console.log([result]);
//             return result + value + str;
//         } else {
//           console.log([result, value, str]);
//             return result + String(value) + str;
//         }
//     });
//     console.log(htmlString);
// }


// // HTML文字列からHTML要素を作成
// const newElement = element`<ul>
//     <li>新しい要素</li>
// </ul>`;
// // 作成した要素を`document.body`の子要素として追加（appendChild）する
// document.body.appendChild(newElement);


// function element(strings, ...values) {
//   // resultの初期値はstrings[0]の値となる
//     return strings.reduce((result, str, i) => {
//         console.log([result, values[i - 1], str]);
//         // それぞれループで次のような出力となる
//         // 1度目: ["template ", 0, " literal "]
//         // 2度目: ["template 0 literal ", 1, ""]
//         return result + values[i - 1] + str;
//     });
// }

// const newElement = element`template ${0} literal ${1}`;

// 何が表示されるでしょうか？
const a = [];
for (let i = 0; i < 9; i++) {
  a[i] = () => console.log("i: " + i);
}

const b = [];
let j = 0;
while (j < 9) {
  b[j] = () => console.log("j: " + j);
  j++;
}

a[2]();
a[5]();
b[2]();
b[5]();
