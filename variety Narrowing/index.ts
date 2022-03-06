// null & undefined 타입체크하는 경우 매우 잦음

function Narrowing2 (a? :string | undefined) {
  if (a && typeof a === 'string') {
    
  }
}

// '&& 는 조건식 2개가 참이면 전부 참으로 판정해주세요~' 라는 논리 연산자인데
// 여러개 사용하면 이상한 현상이 있다고 한다.
// && 기호로 비교할 때 true , false를 넣는게 아니라 자료형을 넣으면
// && 사이에 처음 등장하는 falsy 값을 찾아주고 그게 아니면 마지막 값을 남겨준다.
// falsy 값은 false와 유사한 기능을 하는 null , undefined , NaN 이런 값들을 의미한다.

// 1 && null && 3 <- 이거는 null 이 남음
// undefined && '안녕' && 100 <- 이거는 undefined 가 남음

// 그래서 위와같은 상황에 
// if (변수 && typeof 변수 === 'string') {  }
// 이렇게 되면 변수가 undefined라면 if 문이 실행되지 않는다.
// 변수가 string 타입이라면 if 문이 실행된다.

type Fish = { swim : string }
type Bird = { fly : string }
// 서로 가진 속성명이 다르면 in 쓰면 된다.

// 속성명 in 오브젝트 자료

function animalFunction( animal :Fish | Bird ) {
  if ( 'swim' in animal ) {
    console.log(animal.swim)
  }
}

// class로부터 생산된 object라면 instanceof로 narrowing
// 가장 쉽게 new 카워드로 object 생산할 수 있는게 날짜
let date = new Date()

if (date instanceof Date) {

}

// 예제

type CarTypeLiteral = {
  wheel : '4개',
  color : string
}

type BikeTypeLiteral = {
  wheel : '2개',
  color : string
}

// 위 두개중 하나에만 있는 유니크한 속성이 없어서 in 사용 불가
// 둘다 부모 class가 없어서 instanceof 도 불가
// 비슷한 object 타입일 경우 literal type 강제로 만들어두면 나중에 도움이 된다.

function ExFunction (x :CarTypeLiteral | BikeTypeLiteral) {
  if (x.wheel === '4개') {
    console.log('x는 Car 타입이에요.')
  }
}