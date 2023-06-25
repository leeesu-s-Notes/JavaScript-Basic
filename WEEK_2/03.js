// 단축 속성명 : property shorthand
// const name = "nbc";
// const age = "30";

// key - value
// 오른쪽이 실질적 데이터, 왼쪽은 그냥 이름, 오른쪽에 있는걸 변수로도 쓸수 있다. 
// 키 밸류위 이름이 같은 경우 생각 가능
// const obj = {
//     name, 
//     age : newAge
     // age : age면 age로 생략 가능
// }
// key - value
// const obj = {name, age};
// const obj1 = {name : name, age:age};

// 전개 구문 = spread operator
// destructuring과 함께 가장 많이 사용되는 es6 문법 중 하나
// let arr = [1,2,3];
// let newArr = [...arr, 4];
// console.log(arr)
// console.log(newArr)

// 객체
let user = {
    name : 'nbc',
    age : 30,
}

// user와 똑같은 형태
// 기존객체의 중괄호를 풀어서 spread -> 다 펼친다음에 중괄호로 다시 묶을 수 있도록 spread해주는 것.
let user2 = {...user }
console.log(user)
console.log(user2)

// 나머지 매개변수(rest parameter)
function exampleFunc(a,b,c, ... args) {
    console.log(a,b,c); // 1,2,3
    console.log(... args); // 4,5,6,7
    console.log(args) //[ 4, 5, 6, 7 ] 배열형태
}
// ...args를 해줘야 나머지 매개변수임을 인지.
exampleFunc(1,2,3,4,5,6,7)

// 템플릿 리터럴 (Template Literal)
// 빽틱은 따옴표랑 기능은 똑같은데 좀 더 추가기능이 있음. 안에, 자바스크립트, 변수, 연산이 들어간다.
// $ 쓰면된다. JSP에서 EL생각하면 될듯
// 멀티라인을 지원한다. 
const testValue = "안녕하세요!"
console.log(`Hello World ${testValue}`); 
// 멀티라인 : 개발자 측면에서 표현할 수 있는 편리성이 백틱으로 상당히 좋아짐
// 활용범위가 넓기에 로그를 찍거나 문자열을 표현할 떄 많은걸 표현 가능 
console.log(`
    Hello
        My name is Javascript!!
         
        Nice to meet you!!
`);