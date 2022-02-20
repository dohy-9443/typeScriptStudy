// 함수와 methods에 type alias 지정하는 법

// 그냥 함수는 타입을 이렇게 지정
function function1(a :string) :number {
  return 123
}

// type alias에 함수 type 저장해서 쓰는 법
// 무조건 arrow function

// string 이 들어오고 number 를 뱉는다.
type funcType = (a :string) => number;

// 함수 type alias 부착하려면 함수 표헌식을 써야한다.
/*
  function 함수 () {} -> 이건 함수 선언식
  이거 말고
  let 함수 = function () {} -> 이건 함수 표현식
  이거 써야한다고 한다.

  그냥 정의가 다를뿐
*/

let function2 :funcType = function (a) { 
  return 10 
}

function2('abc')

// object 안에 함수를 만들 수 있다.

let customerInfo1 = {
  name: 'kim',
  plusOne() {

  }
}

customerInfo1.plusOne()

let customerInfo2 = {
  name: 'kim',
  plusOne(a :number) :number {
    return a + 1
  },
  changeName  : (a :number) :number => { return 123 }
}

customerInfo2.plusOne(2)
customerInfo2.changeName(2)

// 콜백함수 함수 안에 함수를 실행하는거 
/*
  function 함수 1 (a) {
    a()
  }

  function 함수 2 () {

  }

  함수 1(함수 2)
*/

// Q1. 위 코드에서 회원정보라는 변수에 타입지정
/*
  - plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.

  - changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다. 

  - type 키워드를 쓰든 말든 알아서 합시다. 
*/

type objectFunctionType = {
  plusOne: (a :number) => number,
  changeName: () => void
}

let customerInfo3 :objectFunctionType = {
  plusOne(a) {
    return a + 1
  },
  changeName : ()  => {
    console.log('안녕')
  }
}

// Q2. 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
/*
  - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 
  맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.

  - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 
  입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 

  - 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 
*/

type CutZeroType = (a :string) => string

let cutZero :CutZeroType = (a) => {
  let val = a.replace(/^0+/, "");
  return val
}

cutZero('01234');

type RemoveDashType = (a :string) => number

let removeDash :RemoveDashType = (a) => {
  let val = a.replace(/-/g, "");
  return parseInt(val)
}

removeDash('010-1234-5678')

// /어쩌구/ 이건 정규식문법인데 정규식은 글자에서 원하는 글자를 찾는 식

// Q3. 함수에 함수를 집어넣고 싶습니다.
/*
  Q2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 

  이 함수는 파라미터 3개가 들어가는데 
  첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면

  1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.

  2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.

  3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 

  이 함수는 어떻게 만들면 될까요?

  둘째 파라미터엔 cutZero, 
  셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.

  실행 예시
  만들함수('010-1111-2222', cutZero, removeDash)

  이렇게 사용하면 문자에 
  1. cutZero를 해주고, 
  2. removeDash를 해주고 
  그 결과를 콘솔창에 1011112222 이렇게 출력해줍니다. 
*/

type Q3Type = (a :string , b :CutZeroType, c :RemoveDashType) => void

let Q3 :Q3Type = (a, b, c) => {
  let result1 = b(a)

  let reslut2 = c(result1)

  console.log(reslut2)
}

Q3('010-1111-2222', cutZero, removeDash);