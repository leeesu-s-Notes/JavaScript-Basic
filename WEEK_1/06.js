// 연산자 ( +, - , * , / , %)

// 1. 더하기 연산자
console.log(1 + 1); // 2
console.log(1 + "1"); // 11 : 문자열로 바뀐다
let temp = 1 + " ";
console.log(typeof temp); //string


// 2. 빼기 연산자
console.log(1 - "2") // -1
console.log(1 - 2); // -1

// 3. 곱하기 연산자(*)
console.log(2 * 3) // 6
console.log("2" * 3) // 6

// 4. 나누기 연산자(/)
console.log(4 /2) //2
console.log("4" / 2) // 2

// 5. 나누기 연산자(/) vs 나머지 연산자(%)
console.log(5 /2) // 2.5
console.log( 5 % 2) // 1

// 6. 할당 연산자(assignment)
// 6-1. 등호 연산자(=)
let x = 10;

// 6-2. 더하기 등호 연산자(+=)
x += 5;


// 비교 연산자(--> ture또는 false를 반환하는 연산자)
// 1. 일치 연산자(===)
// 타입까지 일치해야 true를 반환하는 연산자

// 숫자 2랑 숫자 2랑 같니? 응!
console.log(2 === 2); // true
console.log("2" === 2); false

// 2. 불일치 연산자(!==)
// 타입까지 일치해야 false를 반환하는 연산자
// 일치연산자의 반대값이 나온다고 생각하면 쉬움

// 숫자 2가 숫자 2랑 다르니? 아니!
console.log(2 !== 2); // false
console.log("2" !== 2) // true
console.log(2 !== "2") // true

// 3. 작다 연산자(<)
console.log("-----")
console.log(2 < 3) //true
console.log(2 <= 3) // true
console.log(3 <= 3); // true
console.log(4 <= 3) // false

// 4. 논리 연산자
// 4-1(논리곱 연산자) : 모두 true일때 true반환
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// 4-2(논리합 연산자) : 두 값 중 하나라도 true를 반환하면 true
console.log("논리합연산자------")
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// 4-2(논리부정 연산자 => !)
// : 값을 반대로 바꿈
console.log("-----")
console.log(!true);
let a = true;
console.log(!a);





