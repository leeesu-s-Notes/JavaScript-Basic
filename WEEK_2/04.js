/*
2. 일급 객체로서의 함수
자바스크립트에서 함수는 일급 객체(First-Class Object) 라고 한다. 
일급객체란 다른 객체과 똑같다.. 라고 생각하면 된다.
다른 개체들은 매개변수로 전달, return문으로 출력될 수 있고 모든 연산이 가능
함수도 그런 연산이 가능하다라는게 가장 쉽고 정확한 개념.
다른 프로그래밍 언어와 달리 함수를 매우 유연하게 사용 가능

*/

// 일급 객체로서의 함수

// (1) 변수에 함수를 할당할 수 있다.
// 함수가 마치 값으로 취급된다.
// 함수가 나중에 사용될 수 있도록 조치가 되었다.
// const sayHello = function() {
//     console.log('Hello')
// }

// (2) 함수를 인자로 다른 함수에 전달 할 수 있다.
// (2)-1. 콜백함수 : 매개변수로써 쓰이는 함수
// (2)-2. 고차함수 : 함수를 인자로 받거나 return하는 함수
// 콜백함수는 고차함수의 한 종류. 매개변수로 쓰이는 함수니까 인자로 받거나에 해당. 
function callFunction(func) {
    // 매개변수로 받은 변수가 사실 함수다. 
    func();
}

// const sayHello = function() {
//     console.log("Hello!")
// };

callFunction(function() {
     console.log("Hello!");
});

// (3) 함수를 반환 할 수 있다.
function createAdder(num) {
    return function(x) {
        return x + num;
    }
}
const addFive = createAdder(5);
console.log(addFive(10));


function Testnum(num1) {
    return function(n) {
        return num1 + n;
    }
}

let func1 = Testnum(10);
console.log(func1(30));

// 함수의 리턴이 함수다. 고차함수.