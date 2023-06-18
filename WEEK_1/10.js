// 화살표 함수
// ES6 신 문법
function add(x,y) {
    return x + y;
}

// 1-1. 기본적인 화살표 함수
let arrowFunc01 = (x, y) =>{
    return x + y;
}
// 1-2. 한 줄로
// 중괄호 줄이 한줄이면 가능
// 중괄호도 같이 삭제해야 한다는 것 기억
let arrowFunc02 = (x,y) => x + y;


function testFunc(x) {
    return x;
}

// 매개변수도 한개 일때는 괄호를 뺴줘도 상관은 없다.
let arrowFunc03 = x => x;