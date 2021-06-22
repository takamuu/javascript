var template: string = `
  おはようございます。
  今日はいい天気ですね！
  `;

  console.log(template);

  // 変数 weather を定義
  var weather: string = '晴れ';

  var template2: string = `
   おはようございます。
   今日は${weather}ですね！
   `;

   console.log(template2);

   var message1: string = 'Hello!';
   let message2: string = 'Bye!';

   if (true) {
     console.log(message1);
     console.log(message2);
   }

if (true) {
  var message3: string = 'こんにちは!'
}

console.log(message3);

if (true) {
  // let はブロック内でしか使用できない変数
  let message4: string = 'やるで!'
}

var message5: string = 'おはよう!' 

function logMessage() {
  // 「おはよう!」と表示させたい。
  console.log(message5);
  var message5: string = "Hello!";
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
function add(x: number, y: number): number{
  return x + y
}

// 返り値の型の省略が可能
function add2(a: number, b: number){
  return a + b
}

// 関数 sayHello は返り値が無い
// 返り値がない場合は void を指定する
function sayHello(): void {
  console.log('Hello');
}

// void型をコンソールに出力すると undefined が出力される
console.log(sayHello());

// 匿名関数（関数名を持たない関数）
// 定義した関数を変数に代入
var sum = function(x: number, y: number): number {
  return x + y
}

// 通常の関数のように使用できる。
console.log(sum(1, 3));

// アロー関数
var sum = (x: number, y: number): number => {
  return x + y;
}

// {},returnの省略
var sum = (x: number, y: number): number => x + y

// ()の省略 → 型が定義されていない場合
var greet = name => console.log(`こんにちは！${name}さん`)

// errorが出るけど一応動く
greet();

greet('佐藤');

// 引数がないので()を省略できない
const sayHello2 = () => console.log('Hello')

// アロー関数と通常関数の違いを以下で比較
// 通常関数--------------------
// this.elementをコンソールに出力する通常関数
function printElement(): void {
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
}
var object2 = {
  element: 'object2 param',
  // object2 の中で関数 printElement を参照
  func: printElement
}

// printElement を参照した関数 func() を実行
// この時 this.element の this は .func() の前の object を指す
// object の中の element の値が出力される
object.func();
object2.func();

// アロー関数-----------------------------
// this.elementをコンソールに出力するアロー関数
var printElement = () => console.log(this.element);

printElement();
// 実行結果: undefind

var object = {
  element: 'object element',
  func: printElement
}
var object2 = {
  element: 'object2 param',
  func: printElement
}

object.func();
// 実行結果: undefind
object2.func();
// 実行結果: undefind


// オブジェクト指向
// class Car {
  // インスタンス変数
  // color: string;
  // constructorメソッドで初期値を設定
  // constructor(color: string) {
    // this.color = color;
  //   constructor(public color: string) {
  // }
  // デフォルト値を設定することも可能です
  // price: number = 1000000;
  // capacity: number = 4;
  // introduceCar(): void {
  //   console.log(`これは、${this.capacity}人乗りの車で、色は${this.color}、値段は${this.price}円です。`);  
  // }
// }

// const car1 = new Car("red");
// console.log(car1.color);
// // インスタンス変数を使用するには次のようにインスタンス.プロパティ名と書きます。
// console.log(car1.price);

// public クラスの外でもアクセス可---------------------
// class Car {
//   // クラス外からもアクセスが可能
//   price: number = 1000000;
//   // publicをつけなくても capacity は public変数になる
//   capacity: number = 4;

//   introduceCar(): void {
//     console.log(`これは、${this.capacity}人乗りの車で、値段は${this.price}円です。`);
//   }
// }

// const car = new Car();
// // publicなプロパティ、メソッドにはインスタンス後もアクセスが可能
// console.log(car.price);
// console.log(car.capacity);

//protected 定義されたクラスとそのクラスを継承したクラス内のみアクセス可------------------
// class Car {
//   protected price: number;
//   protected capacity: number;

//   constructor() {
//     this.price = 1000000;
//     this.capacity = 4;
//   }

//   protected introduceCar(): void {
//     console.log(`これは、${this.capacity}人乗りの車で、値段は${this.price}円です。`);
//   }
// }

// class Truck extends Car {
//   constructor() {
//     super();
//     this.price = 4000000;
//     this.introduceCar();
//   }
// }

// const truck = new Truck();
// // インスタンス化された後は protected のプロパティやメソッドにはアクセスできない。
// console.log(truck.price);
// truck.introduceCar();

// private 定義されたクラス内でのみアクセス可-----------------
// class Car {
//   private price: number;
//   private capacity: number;

//   constructor() {
//     this.price = 1000000;
//     this.capacity = 4;
//   }

//   private introduceCar(): void {
//     console.log(`これは、${this.capacity}人乗りの車で、値段は${this.price}円です。`);
//   }
// }

// class Truck extends Car {
//   constructor() {
//     super();
//     // コンパイルエラーが出る
//     this.price = 4000000;
//     // コンパイルエラーが出る
//     this.introduceCar();
//   }
// }

// const car = new Car();
// // コンパイルエラーが出る
// console.log(car.price);
// car.introduceCar();

// const truck = new Truck();
// // コンパイルエラーが出る
// console.log(truck.price);
// truck.introduceCar();


// ゲッター --------------------
// class Car {
//   private _color: string;
//   private _price: number;

//   constructor() {
//     this._color = "red";
//     this._price = 1000000;
//   }

//   get color() {
//     return this._color;
//   }
// }

// const car = new Car();
// console.log(car.color);

// セッター ---------------------
class Car {
  private _color: string;
  private _price: number;

  constructor() {
    this._color = "red";
    this._price = 1000000;
  }

  set price(price: number) {
    this._price = price;
  }
}

const car = new Car();
car.price = 2000000;

// console.log(car.color);