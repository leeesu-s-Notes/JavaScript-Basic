// 형 변환
// 형태 -> 바꾼다
// 명시적 형 변환, 암시적 형 변환

// 1. 암시적
// 1-1. 문자열
// 더하기 연산자로 문자와 숫자가 만다면 문자로 바뀜
// 더하기 연산자
let result1 = 1+ "2";
console.log(result1);
console.log(typeof result1); // string

// 어떤 다른 데이터 타입과 만났을때 문자열이 우선시 된다.
let result2 = "1" + true;
console.log(result2);
console.log(typeof result2); // string

// {}, null, undefined + "1" => 문자열

// 1-2 숫자
let result3 = 1 - "2";
console.log(result3); // -1
console.log(typeof result3); // number

let result4 = "2" * "3"; // 6
console.log(result4); // number
console.log(typeof result4);

// 뺴기나 곱하기 나누기에는 항상 숫자가 우선시됨
// 문자랑 문자가 와도 '숫자'로 변함.

// 2. 명시적 형 변환
// 2-1 . Boolean
console.log(Boolean(0)); 
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN)); // 여기까지 다 false
console.log("-----------------------")
// 값이 false라고해도 영향없이 값이 있으니까 true, 객체는 값이 없어도 true
console.log(Boolean("false")); //true
console.log(Boolean({})); //true


// 2-2 문자열 : 전부 typeof가 string이 출력.
let result5 = String(123);
console.log(typeof result5);
console.log(result5); // 123

let result6 = String(true);
console.log(typeof result6);
console.log(result6); //true

let result7 = String(false);
console.log(typeof result7);
console.log(result7); // false

let result8 = String(null);
console.log(typeof result8);
console.log(result8); // null

let result9 = String(undefined); 
console.log(typeof result9);
console.log(result9); // undefined

// 1-3 Number
let result10 = Number("123");
console.log(result10); //123
console.log(typeof result10); //number

