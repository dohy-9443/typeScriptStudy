// JS 문법 그대로 TS 그대로 사용가능

// Q1 이름 나이 출생지역을 변수로 각각 저장

let myName :string = 'donghyun';

let myAage :number = 28;

let myAddress :string = 'seoul';

// Q2 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담기

let favoriteSing :{ song: string, singer: string } = { song: '상사화', singer: '안예은' }

// Q3 다음과 같이 생긴 자료의 타입을 지정

/*
  let project = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
  }
*/

type ProjectType = {
  member : string[],
  days : number,
  started : boolean
}

let project :ProjectType = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}