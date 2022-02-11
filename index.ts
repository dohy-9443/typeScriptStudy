// 간단한 변수 설정

let nikName : string = 'kim'
// nikName 이라는 변수를 만들건데 그 변수에는 string(문자) 타입만 들어올 수 있다.

// nikName = 123
// 위와같이 다른 타입을 넣게되면 에러가 나게 된다.

let names : string[] = ['kim', 'park'];
// 배열안에 string 타입으로 선언하려면 위와같이 선언하면 된다.

let nameObject : {name: string} = {name: 'kim'};
// object 형태는 안에 name 은 어떤 타입으로 들어올지 같이 선언해줘야한다.

let nameNoneType : {name?: string} = { };
// ?를 붙이게되면 name이 들어올 수도 있고 안들어 올 수도 있다 그래서 에러를 내지말아줘 라는 뜻이라고 한다. 

// 다양한 타입지정

let nameUnion : string | number = 'kim';
nameUnion = 123;
// nameUnion 에는 strng이 들어올 수도 있고 number가 들어올 수도 있다.

let arrayObjectUnion : string[] | {num: number} = ['가', '나'];
arrayObjectUnion = {num: 123};
// 당연히 이런거도 된다.

// 타입을 변수로 선언
type MeType = string | string[];

let fixType : MeType = '변수에 담은 타입'

// string number 이런 것 뿐만 아니라 타입을 만들어서 사용가능
type NameType = 'kim' | 'park';

let kimName : NameType = 'kim';

// 함수에 타입 지정하기
function func(x : number) {
  return x * 2
}
// 이 함수는 무조건 number가 들어와야하는 함수

function func2(x : number) : number {
  return x * 2
}

// 배열 안에 순서를 포함해서 어떤 자료가 들어올지 정확히 지정하고 싶을 땐 tuple 타입을 사용하면 된다고 한다.
type Member = [number, boolean]; // 이런게 tuple 타입이라고 한다.

let john : Member = [100, false];
// 대괄호 안에 들어올 자료의 타입을 차례로 적어주면 된다.

// Object 자료형도 위와 같이 작성하면 된다.
type Member2 = {
  name: string,
  age: number,
  marry: boolean
}

let kim : Member2 = {
  name: 'kim',
  age: 20,
  marry: false
}

// object에 타입지정해야 할 속성이 너무 많으면
type Member3 = {
  [key: string] : string,
}

let park : Member3 = {
  name: 'park',
  age: '123123',
}

// class 문법에서도 type 지정하기
class User {
  name : string;
  constructor(name : string) {
    this.name = name;
  }
}