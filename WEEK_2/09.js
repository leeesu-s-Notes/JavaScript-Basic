const myMap = new Map();
myMap.set('one',1);
myMap.set('two',2);
myMap.set('three',3);

//console.log(myMap.keys());
for(const key of myMap.keys()) {
    console.log(key);
}


//console.log(myMap.values());
// value에 하나하나 배정된 것
for(const value of myMap.values()) {
    console.log(value)
}

console.log(myMap.entries())
for(const entrie of myMap.entries()) {
    console.log(entrie);  //[ 'one', 1 ] [ 'two', 2 ] [ 'three', 3 ]
}

// map의 
console.log(myMap.size) // map의 사이즈(길이)
console.log(myMap.has("two")) // 이 값이 있는가 true/false : key 기반 검색  true