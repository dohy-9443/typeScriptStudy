// 함수에 사용하는 never 타입도 있긴하다.
function NeverFunction() {
    // function return 값에 붙일 수 있는 never type
    // throw new Error()
    // 강제로 에러가 남 
    while (true) {
    }
}
// 어떤 함수가
// 조건 1) 절대 return을 하지 않아야하고
// 조건 2) 함수 실행이 끝나지 않아야합니다. ( 전문용어로 endpoint가 없어야한다. )
// 그런 함수에 붙일 수 있는 타입이다.
// 조건 1, 2는 같은 말인데 모든 자바스크립트 함수 맨 밑엔
// return undefined 라는 숨겨진 코드를 가지고 있다.
// 그래서 조건 2가 맞으면 1도 맞다.
// 실제 코딩에서는 never 타입 대부분 쓸데 없다.
// 그냥 :void 쓰면 됨
// never 타입 등장하는 경우 
// 1. 뭔가 이상한 narrowing
function NeverOne(parameter) {
    if (typeof parameter == 'string') {
        console.log(parameter);
    }
    else {
        console.log(parameter);
    }
}
// 2. 어떤 함수표현식은 return 타입은 자동으로 never
let NeverTwo = function () {
    throw new Error();
};
// 굳이 쓸 일은 없고 등장하면 이해할 수만 있으면 됨
