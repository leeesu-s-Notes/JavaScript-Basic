// 배열

// 1. 생성
// 1-1. 기본 생성
//let fruits = ["사과", "바나나", "오렌지"];
 // 1-2. 크기 지정
 // 크기가 5인 배열을 만들어줘
 let number = new Array(5);

 console.log(number) // [ <5 empty items> ]
//  console.log(fruits) // [ '사과', '바나나', '오렌지' ]

 // 2. 요소 접근
 // for과 배열은 짝꿍이라고 봄.
//  console.log(fruits[0]);
//  console.log(fruits[1]);
//  console.log(fruits[2]);

 // 3. 배열 메소드
 // 3-1. push 밀어 넣는것
//  let fruits = ["사과", "바나나", "오렌지"];
//  console.log("1",fruits)
//  fruits.push("감귤");
//  console.log("2",fruits)


 // 3-2. pop
 // 마지막 요소를 꺼내는 메소드
//  let fruits = ["사과", "바나나", '오렌지']
//  console.log("1 => ", fruits) // 1 =>  [ '사과', '바나나' , '오렌지']
//  fruits.pop();

//  console.log("2 => ", fruits) // 2 =>  [ '사과' , '바나나']


 // 3-3. shift
//  let fruits = ["사과", "바나나","오렌지"]
//  console.log("1 => ", fruits) // 1 =>  [ '바나나' ]
//  fruits.shift();

//  console.log("2 => ", fruits) // 2 =>  [ '' ]

 // 3-4. unshift 맨 앞에 어떤 것을 추가하는 것
//  fruits.unshift("포도");
//  console.log(fruits);


// 3-5. splice
// let fruits = ["사과", "바나나","오렌지"]
// fruits.splice(0,1,"포도"); // 1번쨰 자리에서 1개 지워라 그리고 그 자리에 포도 / 0부터 시작함.
// 첫번째 요소부터 첫번쨰 요소까지 삭제하고 애로 갈아끼워줘
// 시작 번호, delete하는 개수
// console.log(fruits)

let fruits = ["사과", "바나나","키위"]
// 3-6. slice
// 두번째 요소부터 세번째 요소까지 새로운 배열로 만들어서 반환해줘
// 바나나부터 시작해서 키워전까지 즉 바나나만 새로운 요소로
// 바나나랑 키워를 가지고 가고 싶다면 1,3
// 사과랑 바나나를 가져가고 싶다면 0,2
let slicedFruits = fruits.slice(1,2);
console.log(slicedFruits)

//forEach, map, filter, find
// let numbers = [1,5,3,4,2];
// 매개변수 자리에 함수를 넣는 것 : 콜백 함수
// 배열에 있는 요소가 각각 한개씩 들어감.
// numbers.forEach(function(item){
//     console.log('itemp입니다=> ' + item)
// }); 

// (2) map : 항상 원본 배열의 길이만큼 return된다.
// return이 꼭 있어야 한다.기존에 있던 배열을 가공해서 새로운 배열을 생산해 내는 역할
// let newNumbers = numbers.map(function(item){
//     return item * 2;
// });

// console.log(newNumbers) // [ 2, 10, 6, 8, 4 ]



// (3)  filter

//let numbers = [1,5,3,4,2];
//let filteredNumbers = numbers.filter(function(item){
//    return item > 3;
//});
//console.log(filteredNumbers)


// (4) find
let numbers = [4,1,4,4,5];
let result = numbers.find(function(item){
    return item > 3;
});

console.log(result);



