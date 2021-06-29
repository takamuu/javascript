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

const array = [1, 2];
const [a, b] = array;
console.log(a);
console.log(b);

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

