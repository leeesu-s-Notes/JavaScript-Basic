// 함수 = function(기능)
// input, output
// 기능의 단위로 묶어서 재활용한다고 생각. 

// 1. 함수 선언문
// 두 개의 숫자를 입력 받아서 덧셈울 한 내보내는 함수

function add(x, y) {
    return x + y; 
}

// 2. 함수 표현식
// 함수명이 지정되어 있으므로 따로 함수이름을 써주지 않는다. 
let add2 = function(x, y) {
    return x + y;
};


// 함수를 호출한다(= 사용한다)
// 적절한 input()을 넣어야 output()이 나옴.
// 함수명() -> add(입력값)
console.log(add(2, 3)); // 5

// 함수 호출, functionResult에 함수로부터 반환받은 값을 할당.
let functionResult = add(3,4);
console.log(functionResult);

// add2를 가지고 10과 20을 더한 값을 출력해보세요!
let functionResult2 = add2(10, 20);
console.log(functionResult2); // 30

// input : 함수의 input -> 매개변수(매개체가 되는 변수!)
// output : return문 뒤에 오는 값 : 반환값



