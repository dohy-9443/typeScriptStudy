// Object에 타입지정하려면 interface 이것도 있음

// object 자료형에는
// type 키워드로 타입변수 생성가능하고
// interface 키워드로 타입변수 생성 가능하다.

// type SquareType = { color : string , width: number } 타입으로 선언할 때는 이렇게

// class 만드는 법이랑 유사 = 이거도 필요 없음
// interface SquareType { color : string , width : number } 이거도 되고
interface SquareType {
  color: string;
  width: number;
}
// 이거도 됨

let square: SquareType = { color: "red", width: 100 };

// interface의 장점 : extends로 복사 가능

interface StudentType {
  name: string;
}

// interface TeacherType {
//   name: string,
//   age : number
// }

interface TeacherType extends StudentType {
  age: number;
}

// let studentObj :StudentType = { name: 'kim' };

// let teacherObj :TeacherType = { name: 'kim', age: 20 };

// type도 extends 처럼 유사하게 가능

type AnimalType = { name: string };
// type CatType = { age : number } & AnimalType
type CatType = { age: number } & StudentType; // 이것도 됨
// 왼쪽도 만족하고 & 오른쪽도 만족하는 타입을 하나 만들어주세요~

// type vs interface
// interface 는 중복선언 가능
// type 은 중복선언 불가능

interface StudentType {
  score: number;
}

interface CarType {
  wheel: number;
}

interface BikeType {
  wheel: string;
}

// let bycicle :CarType & BikeType = { wheel : 2 }

// Q1. interface 이용해서 간단하게 타입을 만들어봅시다
// 예시 코드
// let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

interface ProductType {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: ProductType = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

// Q2. array 안에 object 여러개가 필요합니다.
/*
  쇼핑몰 장바구니를 구현하려고 하는데 

  let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 
  이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요? 

  오늘 배운 interface 문법을 써봅시다.
*/

interface ShoppingType {
  product: string;
  price: number;
}

// let 장바구니 :ShoppingType[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]

// Q3. 위에서 만든 타입을 extends 해봅시다.
/*
  갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다. 
  { product : '청소기', price : 7000, card : false }
  위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.
*/

interface UpdateShoppingType extends ShoppingType {
  card: boolean;
}

let 장바구니: UpdateShoppingType[] = [
  { product: "청소기", price: 7000, card: false },
  { product: "청소기", price: 7000, card: false },
];

// Q4. object 안에 함수를 2개 넣고 싶은데요
/*
  1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 

  2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 

  이 object 자료를 어떻게 만들면 될까요? 

  interface를 이용해서 object에 타입지정도 해보십시오. 
*/

interface TwoFunctionType {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let twoFunObj: TwoFunctionType = {
  plus: (a, b) => a + b,
  minus: (a, b) => a - b,
};

console.log(twoFunObj.plus(1, 2));
console.log(twoFunObj.minus(1, 2));
console.log("test");
