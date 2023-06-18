// 불리언(Boolean)
// true(참), false(거짓)

let bool1 = true;
let bool2 = false;

console.log(bool1);
console.log(typeof bool1);
console.log(bool2);
console.log(typeof bool2)


// if : 만약 ~ 한다면!

// undefined
// un : not, define :정의하다
// 값이 할당되지 않음
let x;
console.log(x);

// null : 값이 존재하지 않음을 '명시적'으로 나타내는 방법
// null = undefined 
// undefined는 값이 할당 x null은 의도적으로 null임을 나타낸것

let y  = null;
console.log(y);

// object(객체) : key - value pair
// 키는 문자형태로 따옴표 없이 들어가도 됨. 
// 어떤 데이터 타입이 들어가도 상관없다.
let person = {
    name : 'choi',
    age : 20
}

console.log(typeof person);

// array(배열)
// 여러개의 데이터를 순서대로 저장하는 데이터 타입
// 콤마를 기준으로 요소들을 순서대로 나열. '순서대로', 하나하나 다 인덱스를 0~ 가지고 있다. 
let number = [1,2,3,4,5];
