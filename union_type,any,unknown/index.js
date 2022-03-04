// 타입을 미리 정하기 애매할 때 ( union type , any , unkonwn )
// Union Type
// 타입 2개 이상 합친 새로운 타입만들기
let guest = 123;
guest = '123';
guest = true;
// 문자 혹은 숫자가 가능한 array 타입 지정은?
let guests = [1, '2', 3];
// 문자 혹은 숫자가 가능한 object 타입 지정은?
let guestObj = { a: '2' };
// any Type
// 모든 자료형을 허용 
// ( 그렇게 되면 타입스크립트를 사용하는 의미가 없음 )
// 왜 사용하냐면 타입 해제 문법
// 일반 JS 변수로 만들고 싶을 때 사용하면 된다.
// 타입관련 버그가 나도 잡아주지 않는다.
let nameAny;
nameAny = 123;
nameAny = 'kim';
// unknown type
// 모든 자료형을 허용
// 용도는 any랑 똑같다.
let nameUnknown;
nameUnknown = 123;
nameUnknown = 'park';
// any 보다 안전한 이유는 
let box = nameAny;
// let box :string = nameUnknown
// 이런 이유이다.
// 타입 스크립트는 엄격함에 대해 
// - 간단한 수학연산도 타입에 맞아야한다.
let AgeType;
// age + 1
// age + 1이 왜 안되냐면 
// union type은 새로운 타입을 만드는 것이기 때문에 안된다.
// JS에서는 'kim' + 1이거도 되기때문에 얘도 당연히 된다.
// string type + 1 ( 허용 )
// number type + 1 ( 허용 )
// string | number type + 1 ( 불가 )
nameUnknown = 123;
nameAny = 123;
nameAny - 1;
// nameUnknown - 1
// 이것도 타입
// Q1 다음 변수 4개에 타입을 지정
// (조건) age 변수엔 undefined 말고 숫자도 들어올 수 있다. 
// let myUser = 'kim'
// let myAge = undefined;
// let myMarried = false;
// let me = [myUser, myAge, myMarried];
let myUser = 'kim';
let myAge = undefined;
let myMarried = false;
let me = [myUser, myAge, myMarried];
// Q2 school 변수에 타입 지정
// let school = {
//   score: [100, 97, 84],
//   teacher: 'Phil',
//   friend: 'John'
// }
// school.score[4] = false;
// school.friend = ['Lee', school.teacher]
let school = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
school.score[4] = false;
school.friend = ['Lee', school.teacher];
