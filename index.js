// 간단한 변수 설정
let nikName = 'kim';
// nikName 이라는 변수를 만들건데 그 변수에는 string(문자) 타입만 들어올 수 있다.
// nikName = 123
// 위와같이 다른 타입을 넣게되면 에러가 나게 된다.
let names = ['kim', 'park'];
// 배열안에 string 타입으로 선언하려면 위와같이 선언하면 된다.
let nameObject = { name: 'kim' };
// object 형태는 안에 name 은 어떤 타입으로 들어올지 같이 선언해줘야한다.
let nameNoneType = {};
// ?를 붙이게되면 name이 들어올 수도 있고 안들어 올 수도 있다 그래서 에러를 내지말아줘 라는 뜻이라고 한다. 
// 다양한 타입지정
let nameUnion = 'kim';
nameUnion = 123;
// nameUnion 에는 strng이 들어올 수도 있고 number가 들어올 수도 있다.
let arrayObjectUnion = ['가', '나'];
arrayObjectUnion = { num: 123 };
let fixType = '변수에 담은 타입';
let kimName = 'kim';
// 함수에 타입 지정하기
function func(x) {
    return x * 2;
}
// 이 함수는 무조건 number가 들어와야하는 함수
function func2(x) {
    return x * 2;
}
let john = [100, false];
let kim = {
    name: 'kim',
    age: 20,
    marry: false
};
let park = {
    name: 'park',
    age: '123123',
};
// class 문법에서도 type 지정하기
class User {
    constructor(name) {
        this.name = name;
    }
}
