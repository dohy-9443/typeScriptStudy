// ex 롤 캐릭터들의 정보를 정의 해보기 { object 자료형으로 }
/* 
var a = {
  name : '어쩌구',
  스킬 어쩌구 ... 
}
*/

// 이게 100개가 넘게 나와야된다.

// var nunu = {
//   q : 'consume',
//   w : 'snowball'
// }

// var garen = {
//   q : 'strike',
//   w : 'courage'
// }

// 이렇게 비슷한 object 많이 만들일 있으면 class 만들어서 쓰면된다.
// 간단하게 class 문법은 object 뽑아내는 기계

// ************************** 부모 ***********************
function machine(skill) {
  this.q = skill;
  this.w = 'snowball';
}

// ******************************************************

// this는 machine부터 생성되는 object ( instance )
// 새로운 object를 뽑고싶으면 new machine() 하면 된다.

// ************************** 자식 ***********************
var nunu = new machine('consume')

console.log(nunu)

var garen = new machine('strike')

console.log(garen)

// *******************************************************

// class 문법 ㄱㄱ
class Hero {
  constructor(skill) {
    this.q = skill;
    this.w = 'snowball';
  }
}

// **************** 프로토타입 ***************************

// 위에 machine 이거 가져다가 쓸거임
// 일단 프로토타입은 그냥 '유전자'라고 생각하면 편하다.

// 유전자 기록
machine.prototype.name = 'kim';

console.log(nunu) // 이떄는 name 은 안뜸 
console.log(nunu.name) // kim 이라고 뜸..ㄷㄷ

// 부모 유전자에 있는걸 자식이 사용가능한 이유
/*
  1. 직접 자료를 가지고 있으면 그거 출력
  2. 없으면 부모유전자까지 찾아봄
  3. 없으면 부모의 부모 유전자까지...
*/

var array = [4,2,1]; // 사람방식
array.sort()

console.log(array)

var arr = new Array(4,2,1); // 컴퓨터 방식 여기서 Array 기계(위에 machine 이랑 똑같지않음?)
// 그래서 .sort() 나 .length 같은 거 부모유전자에 있으니까 가져다 쓸 수 있는겨

Array.prototype.makeFunction = function() { console.log('만들어본 프로토타입 함수'); }

arr.makeFunction()

// ******************************************************