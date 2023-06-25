// 구조분해할당 : de + structuring(de + structure + ing)
// ds = not
// structure = 구조
// 배열이나 객체의 속성
// 구조를 찢어서 각각의 할당을 한다는 뜻


// (1) 배열의 경우
// let [value1, value2] = [1, "new"] // 왼쪽은 value1, 오른쪽은 value2에 각각 할당해줘
// console.log(value1);
// console.log(value2);
// let arr = ["value1","value2","value3"];
// let [a,b,c] = arr;

// 할당 받으려는 변수가 4개라면
let arr = ["value1","value2","value3", "value4"];
// undefined를 막기 위해 미리 값을 할당해줄 수 있다.
let [a,b,c,d=4] = arr;

console.log(a); // value1 
console.log(b); // value2
console.log(c); // value3
console.log(d); // undefined -> 4

// (2) 객체인 경우
// let user = {
//     name : 'nbc',
//     age : 30,
// };

// let {name, age} = {
//     name : "nbc",
//     age : 30,
// };

// console.log("name => ", name); // string
// console.log("age => ", age); // number

// 새로운 이름으로 할당
// let {name : newName, age : newAge} = user
// console.log("newName => ", newName)
// console.log("newAge => ", newAge);

// (2) 객체인 경우
let user = {
    name : 'nbc',
    age : 30,
    birthday : "yesterday"
};

// 여기는 값을 넣어줘도 초기값일뿐, undefined일때만 의미가 있다.
// birthday나옴
let {name, age, birthday = "today" } = user;
console.log(name);
console.log(age);
console.log(birthday);