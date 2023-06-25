// 일급객체로써의 함수 (2)
const person = {
    name : 'John',
    age : 31,
    isMarried : true,
    sayHello : function() {
        // console.log("Hello, My name is" + this.name)
        console.log(`Hello, My name is ${this.name}`)
    }
    // 중괄호 내에서의 this는 자기자신 this.name이면 John가리킴
    // sayHello :   () => {
    //     console.log(`Hello, My name is ${this.name}`) //Hello, My name is undefined 
        // 화살표 함수는 this를 binding하지 않는다.
//    }
};
person.sayHello();