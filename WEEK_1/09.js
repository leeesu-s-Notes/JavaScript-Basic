// 스코프, 전역변수, 지역변수, 화살표 함수
function printX() {
    let x =  10;
    console.log(x);
}
// 오류가 남.  x ist not defiend x가 정의되지 않았다는 오류
console.log(x);
printX();