function IdontKnow (...a :number[]) {
  console.log(a) // 출력해보면 배열에 담아줌
}

IdontKnow(1,2,3,4,5,6)

// 함수 파라미터에 ...a 이케 적으면 이게 rest 파라미터
// 파라미터가 몇개가 들어올지 몰르니까 이렇게 적는다.
// 저 a 에는 들어온 파라미터를 배열에 담아주는데 
// 그럼 타입 지정도 마찬가지로 배열로 지정해주면 된다.

// Q. rest parameter에 문자 or boolean or number 가능하다면?
function allRestFunction (...a : (string | boolean | number)[]) {
  console.log(a)
}

allRestFunction(1,2,3,'a', true)

// Spread operator와 다른거
let arr = [1,2,3]
let arr2 = [4,5]
let arr3 = [...arr, ...arr2]
console.log(arr3)

// arr나 object 왼쪽에 점3개 붙이면 괄호 벗겨주세요 라는 뜻(얕은 복사)

// Destructuring 문법

// 스크립트에서 array, object 안에 있는 데이터를 빼서 변수로 쓰고싶은데

let arrVal = ['kim', 'Lee'];
let personVal = {student: true, age: 20}

let arrVal1 = arrVal[0]

let personVal1 = personVal.student

// 이렇게 써야되는데 너무 기찮다 그래서 나온 문법

let {stu, a} = {stu: true, a: 20}
// 이렇게 쓰거나
let {student, age} = personVal
// 위에 만들어진 object를 가져다 이케쓰는거도 가능

let [ kim, Lee ] = arrVal
// 배열도 당연히 가능

// 함수도 가능

function DestFunction({student, age} :{student: boolean, age: number}) {
  console.log(student, age)
}

DestFunction({student: true, age: 20})

// Q1. 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
/*

최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 

(조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.

(조건2) Math.max() 사용금지 반복문이나 쓰셈 

*/

function restQ1(...a) {
  let maxNum = 0;
  a.forEach((item) => {
    if (maxNum < item) {
      maxNum = item
    }
  })

  return console.log(maxNum)
}

restQ1(6,3,7,2)

// Q2. 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 

/*

함수( { user : 'kim', comment : [3,5,4], admin : false } )

(조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.

(조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.

*/

function DestQ2 ({user, comment, admin} :{user: string, comment: number[], admin: boolean}) :void {
  console.log(user, comment, admin)
}

DestQ2( { user : 'kim', comment : [3,5,4], admin : false } )

// Q3. 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
/*
  함수( [40, 'wine', false] )

  (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.

  (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
*/

function DestQ3 ([arrNum, arrStr, arrBool] :(number | string | boolean)[]) :void {
  let result = [arrNum, arrStr, arrBool]
  console.log(result)
}

DestQ3( [40, 'wine', false] )