// 객체
// key = value pair
// 하나의 변수에 여러개의 값을 넣을 수 있다!

// value에 올수 있는 데이터의 형태는 제한이 없다. 

// 1. 객체 생성 방법
// 1-1. 기본적인 객체 생성 방법
// let person = {
//     name : "홍길동",
//     age : 30,
//     gender : "남자"
// };

// 1-2. 생성자 함수를 이용한 객체 생성 방법
// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// let person1 = new Person("홍길동", 30, "남자");
// let person2 = new Person("홍길순", 20, "여자");

// // 2. 접근하는 방법
// console.log("1", person.age);
// console.log("2", person.name);
// console.log("3", person.gender);


// 3. 객체 메소드 (객체가 가진 여러가지 기능 ; Object.~)
// 3-1. Object.key() : key를 가져오는 메소드
let person = {
    name : "홍길동",
    age : 30, 
    gender : "남자",

};
// 객체 안의 key들이 배열형태로 담긴다.
let keys = Object.keys(person); // keys =>  [ 'name', 'age', 'gender' ]
console.log("keys => ", keys)


// 3-2 values
let values = Object.values(person);
console.log("values =>", values); // values => [ '홍길동', 30, '남자' ]

// 3-3 entries
// key와 value를 묶어서 배열로 만든 배열!! (2차원 배열)
let entries = Object.entries(person);
console.log("entries ->", entries) // entries -> [ [ 'name', '홍길동' ], [ 'age', 30 ], [ 'gender', '남자' ] ]

// 3-4. assing
// 객체를 복사한다.
let newPerson = {};
// 어디에다 복사할래, 누굴 복사할래
// Object.assign(newPerson, person ,{ });
// console.log("newPerson =>", newPerson, {age : 31});
Object.assign(newPerson, person ,{gender : "여자" });
console.log("newPerson =>", newPerson);


// 3-5 객체 비교
// 객체는 왜 false?
// 객체와 배열은 크기가 크다.-> 메모리에 저장할 때 별도의 공간에 저장
// person1 별도 공간에 대한 주소
// 그러므로 두 주소는 다름
// let person1 = {
//     name : '홍길동',
//     age : 30,
//     gender : "남자",
// };

// let person2 = {
//     name : '홍길동',
//     age : 30,
//     gender : "남자",
// };
// // true가 아닌 false가 나옴.

// console.log("answer =>" ,person1 === person2) //false

// // 이 객체를 문자열화 시킨다. 
// console.log(JSON.stringify(person1) === JSON.stringify(person2)) // true


// 3-6. 객체 병합
let person1 = {
    name : '홍길동',
    age : 30,
    gender : "남자",
};

// person2 별도 공간에 대한 주소
let person2 = {
    gender : "남자",
};

//  ... : spread operator
// 두개를 병합하는 방법
//...어쩌고 저쩌고 있다로 이해하면 됨
let perfectMan = {...person1, ...person2};

