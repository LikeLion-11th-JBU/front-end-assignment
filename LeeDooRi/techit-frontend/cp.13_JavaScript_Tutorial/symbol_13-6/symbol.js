var name1 = "김멋사";
var name2 = "김멋사";

console.log(name1 == name2);

var name3 = Symbol("이태킷");
var name4 = Symbol("이태킷");

console.log(name3 == name4);

var myclass={
  [symbol("이태킷")]:1,
  [symbol("이태킷")]:2

};
/* 심볼의 특징 고유하다.  */