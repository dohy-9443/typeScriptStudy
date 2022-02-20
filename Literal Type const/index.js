// Literal Type 만드는 법
// string, number 이런 것만 타입이 될 수 있는게 아님
// 일반 글자같은 것도 타입이 될 수 있다.
// literal type : 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입을 literal type
let nameKim;
nameKim = 'kim';
let nameKimPark;
nameKimPark = 'kim';
nameKimPark = 'park';
// nameKimPark = 'Lee'
function helloFun(a) {
    return a;
}
helloFun('hello');
function rps(a) {
    return ['가위'];
}
rps('가위');
// Literal type은 const 변수 업글버전임
const a = 123;
// a = 'kim'
var data = {
    name: 'kim'
};
// as const 쓰면 '이 object는 literal type 지정'
// 1. object value 값을 그대로 타입으로 자정해줌
// 2. object 속성들에 모두 readonly 붙여준다.
function inFunc(a) {
}
inFunc('kim');
inFunc(data.name);
// 이건 안됨 왜냐면 'kim'이라는 자료만 들어올 수 있다가 아니라 
// 'kim'이라는 타입만 들어올 수 있다. 이기 때문
