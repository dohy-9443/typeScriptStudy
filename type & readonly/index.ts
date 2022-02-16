// 타입 정의가 너무 길면 Type Aliases (별칭)

// let animal :string | number | undefined;
// 위와 같이 타입이 너무 길면 

type Animal = string | number | undefined;
// 이렇게 타입을 변수로 만들 수 있다.

let 동물 :Animal;
// 이런식으로 작성 가능

// Object 형식도 가능
type Student = { name : string , age : number }

let merry :Student = { name : 'merry', age : 20 };


// const 팁
// const 변수는 등호로 재할당만 막는 역할 const a = 1; a = 2; 이런거
// const 담은 object는 수정이 자유로움

const address = { region: 'seoul' };
address.region = 'busan';

// 하지만 typescript에서는 object 자료 수정도 막을 수 있음

type GirlFriendType = { readonly name : string }
// readonly를 넣으면 읽기 전용이 되서 수정이 불가함

const girlFriend :GirlFriendType = {
  name : '여친 없음'
}

// girlFriend.name = '여친 생김'
// 이거 근데 타입스크립트 에러는 에디터 & 터미널에서만 존재하고 
// 컴파일 된 js 파일에서는 바껴있다고 한다.

// 선택사항
// object 타입 변수에서도 ? ( 선택사항 ) 가능
type GF = { name? : string , tel : number }
// type gF = { name : string | undefined }

const gF2 :GF = { tel : 123 }

// Type 키워드는 여러개 합칠 수 있다.
type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x : number };
type PositionY = { y : number };

// & 합친다. ( extend 하기 )
type NewType = PositionX & PositionY; // { x: number , y: number }

let position :NewType = { x : 10, y : 20 };

// (참고) 같은 이름의 type 변수 재정의 불가능하다.

// Q1. object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?

type SquareW = { width: number };
type SquareH = { width: number };

type Square = SquareW & SquareH;

let sq :Square = { width: 123 }
// 하나밖에 못씀

// Q2. 다음 조건을 만족하는 타입
/*
  1. 이 타입은 object 자료형이어야합니다.

  2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 

  3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.

  4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
*/

type Q2 = { color? : string, size : number, readonly position : number[] }

let test2 :Q2 = { size: 123, position: [1,2,3] };

// Q3. 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오.
/*
  1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }

  2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.

  3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 
*/

type Q3 = { name: string, phone: number, email: string }

let test3 :Q3 = { name : 'kim', phone : 123, email : 'abc@naver.com' }

// Q4. 다음을 만족하는 type alias를 만들어보십시오.
/*
  1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.

  2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 

  3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.
*/

type Minor = { minor : boolean }
type Q4 = Q3 & Minor

let test4 = { name : 'kim', phone : 123, email : 'abc@naver.com', minor: false }