// 2. 문자 : string(문자열 = 문자의 나열)
// ' ' = " " " 작은 따옴표나 큰 따옴표로 합쳐놓아야 문자열이 된다.
let str = "Hello World!";
console.log(str);
console.log(typeof str);

// 2-1. 문자열 길이 확인하기
console.log(str.length)

// 2-2 문자열 결합하기
let str1 = "Hello ";
let str2 = "World!";
let result = str1.concat(str2);
console.log(result);

// 2-3 문자열 자르기
let str3 = "Hello, World!";
// 어디서부터 자를지 몇개까지 자를지 world
console.log(str3.substr(7, 5));
// start number와 end number
// 시작위치부터 끝 위치까지 world
console.log(str3.slice(7, 12));

// 2-3 문자열 검색
let str4 = "Hello, World1";
// world가 시작되는 시점 7번째부터 시작된다.
console.log(str4.search("World"));

// 2.5 문자열 대체
let str5 = "Hello World!";
let result01 = str5.replace("World","javascript");


// 2-6 문자열 분할
let str6 = "apple, banana, kiwi";
let result02 = str6.split(",");
console.log(result02)