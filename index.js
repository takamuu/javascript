// let youtuber = {
//   list: {
//     business: {
//       youtuber: [
//         { name: "しまぶー", age: 20, teachProgramming() {} },
//         { name: "あっちゃん", age: 37, teachHistory() {} }
//       ],
//       teach() {}
//     },
//     entertainment: {
//       youtuber: [{ name: "ヒカキン" }, { name: "はじめしゃちょー" }],
//       makeSmile() {}
//     }
//   },
//   plan() {},
//   uploadVideo() {}
// };

// console.log();

// alert();

// document.getElementById("");

// window.document.getElementById("Masthead");

// window.document.location.reload();

// 以下はJS Binにて動作確認
// const foo = document.getElementByID("foo");

// const fooWidth = foo.offsetWidth;

// const fooHeight = foo.offsetHeight;

// const fooArea = fooWidth * fooHeight;

/**
 * Q. どうやって変数を宣言するのか？
 * A. const 変数名 = 初期値；
 *    let 変数名 = 初期値；
 *    var 変数名 = 初期値;
 *    予約語も不可
 */

// const foo = 100;

// let bar = 200;

// var baz = 300;

// const fooWidth = 100; //camelCase Jsは慣例的にcamelCaseを使用

// const foo_width = 100; //snake_Case

/** const の特徴
 * 再代入できない、再定義できない。
 */
// const constNumber = 100;
// const constNumber = 200;

/** 
 * constは厳密には定数ではない
 */

// const obj = {
//   foo: 123
// };

// obj.foo = 456;

// console.log(obj.foo);

/**
 * let の特徴
 * 再代入できる、再定義できない。
 */

// let letNumber = 100;
// letNumber = 200;

// console.log("ok");

// console.log(letNumber)

//再定義できない。

// let letNumber = 100;
// let letNumber = 200;

/**
 * var の特徴
 * 再代入できる、　再定義できる。
 */

// var varNumber = 100;
// var varNumber = 200;

// varNumber = 300;

// console.log("ok");
// console.log(varNumber);

/**
 * 基本はconst、どうしても駄目ならletを使用、var使ったら負け
 * varが以下のようなバグを生む温床になる
 * ブロックスコープ無視
 * 変数の巻き上げ（Hoisting)
 * 
 * なぜ、varがあるの？→もともとはvarしかなかったため、後方互換性
 */

/**
* もくじ
*
* 1.関数とは何か？
* タスクや値計算を実行する文の集まり(MDN)
*
* 2.今までの講座とのつながりについて
* オブジェクトのメソッドが関数です
* 関数 = メソッド と考えてOK
* // window.alert();
* // window.console.log();
* // window.document.getElementById("");
*
* メソッドの短縮記法についても説明
// const foo = {
//   alert: function () {},
//   alert() {},  ←短縮記法
// }; 
*
* 
* 3.関数の基礎について理解する
* return の有無で何が違うのか
// function 関数名(仮引数1,仮引数2） {
//   処理
// return 関数の返り値;
// };
//
// function cut(food) {
//  切る処理
//  const cutFood = food.slice();
//  return cutFood;
// };
//
//const cutCarrot = cut(carrot); //人参
//const cutPotato = cut(potato); //じゃがいも
*
*
// function throwAway(food) {
// 捨てる処理
// delete food;
// };
*
// function isTweetable(text) {
//  return text.length <= 140;
// }
//
// console.log(isTweetable("foo"))
//
// function alertTweetable(text) {
//  if (text.length <= 140) {
//  alert("you can tweet!");
//  }
// }

// alertTweetable("foo");

// if文の中を以下のように書き換えてもOK
// function alertTweetable(text) {
// if (isTweetable(text))
//  alert("you can tweet!");
//  }
// }
// alertTweetable("foo");

* 4.匿名（無名）関数について理解する
* 関数は値として利用できる（関数式）
*
// const isTweetable = function(text) {
//   return text.length <= 140;
// };

// console.log(isTweetable("foo"));
*
* 5.コールバック関数について理解する
* windowオブジェクトのメソッド等でもよく使われます
*
//関数の中で関数を実行しているもの
// function 高階関数(コールバック関数){
//  コールバック関数();
// }

// function bring(food) {
//   if (手洗いが終えたら) {
//   //食材をもってきてもらう処理
//   }
// }
  
// function peer(food) {
//   if (手洗いが終えたら) {
//   //食材食材の皮をむく処理
//   }
// }
  
// function cut(food) {
//   if (手洗いが終えたら) {
//   //食材を切ってもらう処理
//   }
// }
  
// // 高階関数を使った場合の処理
// function washed(fn) {
//   if (手洗いが終えたら) {
//     fn(); // コールバック関数の処理
//   }
// }

// function bring(food) {
//   //食材をもってきてもらう処理
// }
  
// function peer(food) {
//   //食材の皮をむく処理
// }
  
// function cut(food) {
//   //食材を切ってもらう処理
// }

// washed(bring);

// 高階関数のコード例（ツイッター例)
// function unfollow() {
//   console.log("フォローを外しました");
// }
  
// function cancelTweet() {
//   console.log("ツイートをキャンセルしました");
// }

// function confirmed(fn) {
//   if (window.confirm("実行しますか？")) {
//     fn();
//   }
// }
  
// confirmed(unfollow);

// 匿名関数を使ったコールバック関数

// function confirmed(fn) {
//   if (window.confirm("実行しますか？")) {
//     fn();
//   }
// }
  
// confirmed(function() {
//   console.log("フォローを外しました");
// });

//リポジトリ削除の構文
// function confirmed(fn) {
//   const input = window.prompt("実行しますか？");
//   if (input === "実行") {
//     fn();
//   }
// }
  
// confirmed(function() {
//   console.log("リポジトリを削除");
// });

//リポジトリ削除の構文の変化
（下記コードは難しく見えるがコールバック関数が匿名関数になっていて、引数（input）があるだけ）
// function confirmed(fn) {
//   const input = window.prompt("実行しますか？");
//   fn(input);
//   }

  
// confirmed(function(input) {
//   if (input === "実行") {
//     console.log("リポジトリを削除");
//  }
// });
*/
