// 1-4. switch
// 변수의 값에 따라, 여러 개의 경우(case) 중 하나를 선택
// default

let fruit = "";

switch(fruit) {
    case "사과":
        console.log("사과입니다");
        break;
    case "바나나":
        console.log("바나나입니다.");
        break;
    case "키위":
        console.log("키위입니다");
        break;
    default:
        console.log("아무것도 아닙니다.");
        break;
}