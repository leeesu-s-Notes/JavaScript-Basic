// 스코프, 전역변수, 지역변수, 화살표함수
// 스코프 scope 범위, 자바스크립트에서 scope는 변수의 영향 범위
// 변수가 어디까지 영향을 미칠 수 있는가?..
// 전체 영역 : 전역변수
// 함수 내에서만 : 지역변수

// 전체영역에서 선언된 변수. 
let x =  10;

function printX() {
    console.log(x);
}


console.log(x);
printX();