export let nameA = 'kim';
export let ageA = 20;
export type Name = string;
export type Name2 = string | boolean;
export type Age = (a :number) => number;

// TypeScript 타입변수 숨기기 문법
namespace NameSpace1 {
  export type Name3 = string | number;
}

// object와 다르게 생겼는데 object안에 숨긴거라고 퉁침
// 쟤 쓸라면 밑에처럼 .찍고 가져다가 써야함
let getNameSpaceVal :NameSpace1.Name3 = 'kim'

console.log(getNameSpaceVal)