// while
// ~ 하는 동안

//let i = 0; 

//while (조건) {
    // 메인로직
    // 증감
//}

// while(i < 10) {
//     console.log(i);
//     i++;
// }
 // for (초기값; 조건; 증감) {
// }

// while문을 활용해서, 3초과 100미만의 숫자 중 5의 배수인 것만 출력하는 예
// let num = 3;
// while(num < 100) {
//     if(num % 5 == 0 && num >= 5) {
//         console.log(num + "는 5의 배수입니다.")
//     }
//     num++;
// }


// do ~ while
// let i = 0;

// do는 우선 실행되고 봄
// do {
//     console.log(i);
//     i++;
// }while(i < 10);

// break, contiue문을 for문과 항상 결합해서 사용한다.
for(let i=0; i < 10; i++) {
    // 말그대로 break; for문을 깨뜨리고 나가버린다고 생각하면 됨.
    if(i === 5) break;
    console.log(i);
}

for(let i=0; i < 10; i++) {
    // 말그대로 break; for문을 깨뜨리고 나가버린다고 생각하면 됨.
    if(i === 5) continue;
    // 그 다음순서로 넘어간다가 둘이 차이점.
    console.log(i); // 5빼고 나머지

}