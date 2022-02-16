// 타입 정의가 너무 길면 Type Aliases (별칭)
// 이렇게 타입을 변수로 만들 수 있다.
let 동물;
let merry = { name: 'merry', age: 20 };
// const 팁
// const 변수는 등호로 재할당만 막는 역할 const a = 1; a = 2; 이런거
// const 담은 object는 수정이 자유로움
const address = { region: 'seoul' };
address.region = 'busan';
// readonly를 넣으면 읽기 전용이 되서 수정이 불가함
const girlFriend = {
    name: '여친 없음'
};
// type gF = { name : string | undefined }
const gF2 = { tel: 123 };
let position = { x: 10, y: 20 };
let sq = { width: 123 };
let test2 = { size: 123, position: [1, 2, 3] };
let test3 = { name: 'kim', phone: 123, email: 'abc@naver.com' };
let test4 = { name: 'kim', phone: 123, email: 'abc@naver.com', minor: false };
