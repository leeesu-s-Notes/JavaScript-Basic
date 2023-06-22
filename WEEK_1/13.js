// 조건부 실행
let x = 10;

if(x > 0) {
    console.log("x는 양수입니다.")
}

// and 조건(&&)

x > 0 && console.log("x는 양수입니다.")

// or 조건(||)
// 삼항 연산자와 단축평가
let y; // 에는 undefined
// y가 undefined면 20을 기본으로 setting해 달라는 문법
let z = y || 20;

console.log(z);

