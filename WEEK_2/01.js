// ES6

// (1) let(변수), const(상수)
// 한번 선언하고 재할당 가능? 불가능? 여부 자바로 보면 final
// 2015년도 이전 => var
 // var는 선언도 되지만, let은 선언을 또하면 오류 남.

// (2) arrow function
function add () {

}


var add = function() {

}

var add = () => {
    return 1;
}

var add = x => 1;

// (3) 삼항 연산자
//condition? true인 경우 : false인 경우
console.log(true? '참' : '거짓')
console.log(false? '참' : '거짓')
console.log(1 === 1 ? '참' : '거짓')