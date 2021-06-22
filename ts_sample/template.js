var _this = this;
var template = "\n  \u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059\u3002\n  \u4ECA\u65E5\u306F\u3044\u3044\u5929\u6C17\u3067\u3059\u306D\uFF01\n  ";
console.log(template);
// 変数 weather を定義
var weather = '晴れ';
var template2 = "\n   \u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059\u3002\n   \u4ECA\u65E5\u306F" + weather + "\u3067\u3059\u306D\uFF01\n   ";
console.log(template2);
var message1 = 'Hello!';
var message2 = 'Bye!';
if (true) {
    console.log(message1);
    console.log(message2);
}
if (true) {
    var message3 = 'こんにちは!';
}
console.log(message3);
if (true) {
    // let はブロック内でしか使用できない変数
    var message4 = 'やるで!';
}
var message5 = 'おはよう!';
function logMessage() {
    // 「おはよう!」と表示させたい。
    console.log(message5);
    var message5 = "Hello!";
    console.log(message5);
}
logMessage();
// // letを使用すると変数の巻き上げが起こらずエラーになるパターン
// var message6: string = 'おはよう!' 
// function relogMessage() {
//   console.log(message6);
//   // let に変更
//   let message6: string = "Hello!";
//   console.log(message6);
// }
// relogMessage();
//関数の定義
// 仮引数 X と y にnumber型を指定し、返り値にnumber型を返す関数
function add(x, y) {
    return x + y;
}
// 返り値の型の省略が可能
function add2(a, b) {
    return a + b;
}
// 関数 sayHello は返り値が無い
// 返り値がない場合は void を指定する
function sayHello() {
    console.log('Hello');
}
// void型をコンソールに出力すると undefined が出力される
console.log(sayHello());
// 匿名関数（関数名を持たない関数）
// 定義した関数を変数に代入
var sum = function (x, y) {
    return x + y;
};
// 通常の関数のように使用できる。
console.log(sum(1, 3));
// アロー関数
var sum = function (x, y) {
    return x + y;
};
// {},returnの省略
var sum = function (x, y) { return x + y; };
// ()の省略 → 型が定義されていない場合
var greet = function (name) { return console.log("\u3053\u3093\u306B\u3061\u306F\uFF01" + name + "\u3055\u3093"); };
// errorが出るけど一応動く
greet();
greet('佐藤');
// 引数がないので()を省略できない
var sayHello2 = function () { return console.log('Hello'); };
// アロー関数と通常関数の違いを以下で比較
// 通常関数--------------------
// this.elementをコンソールに出力する通常関数
function printElement() {
    console.log(this.element);
}
// ここのthisは、上位のオブジェクトを参照しています
// ブラウザでは Window で Node.js では global になります（今回はNode.jsで実行します）
// global の Object で変数 element が定義されていないので undefind が出力される
printElement();
// 実行結果: undefind
var object = {
    element: 'object element',
    // object の中で関数 printElement を参照
    func: printElement
};
var object2 = {
    element: 'object2 param',
    // object2 の中で関数 printElement を参照
    func: printElement
};
// printElement を参照した関数 func() を実行
// この時 this.element の this は .func() の前の object を指す
// object の中の element の値が出力される
object.func();
object2.func();
// アロー関数-----------------------------
// this.elementをコンソールに出力するアロー関数
var printElement = function () { return console.log(_this.element); };
printElement();
var object = {
    element: 'object element',
    func: printElement
};
var object2 = {
    element: 'object2 param',
    func: printElement
};
object.func();
object2.func();
