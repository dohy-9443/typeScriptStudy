// 타입을 파라미터로 입력하는 Generic

// 함수에 타입도 파라미터로 입력가능
function func10(x :unknown[]) {
  return x[0] // 숫자로 나간다고해서 타입이 number로 바뀌고 그런거 없음
  // 위에 unknown이라고 해버리면 그냥 평생 unknown임
}

let a = func10([4,2])
console.log(a)

// 위에처럼 타입이 number가 아니라서 숫자가 나올거 알지만
// console.log(a + 1) 이런게 안됨 그래서 나온 해결책

// 1. return x[0] 이부분에서 narrowing 하거나 as 쓰거나 그러면 됨

// 2. Generic 함수 만들기 ( 파라미터로 타입을 입력하는 함수 )
function func11<MyType>(x :MyType[]) :MyType {
  return x[0]
}

let b = func11<number>([4,3]);

// 이렇게 적으면 위에 저 <> 안에 적은 MyType은 
// let b = func11<number>([4,3]); 여기 
// <number> 이게 들어간다.

// 이제 이렇게 되면 
console.log(b + 1) // 이게 됨
// 그리고 요런거도 됨 훨씬 확장성 높음
let c = func11<string>(['3', '1'])

// 근데 이런게 있음
function func12<T extends number>(x :T) {
  return x - 1
}

let d = func12<number>(100);
// 이렇게 했는데 에러남 그래서
// <T extends number> 이렇게 작성한다.
// T가 number로만 오게 체크해줘

// 커스텀 타입으로도 타입파라미터 제한가능
interface LengthCheck {
  length : number
}

function func13<T extends LengthCheck>(x : T) {
  return x.length
}

let e = func13<string[]>(['100'])