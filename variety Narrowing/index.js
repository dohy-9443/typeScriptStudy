// null & undefined 타입체크하는 경우 매우 잦음
function Narrowing2(a) {
    if (a && typeof a === 'string') {
    }
}
// 서로 가진 속성명이 다르면 in 쓰면 된다.
// 속성명 in 오브젝트 자료
function animalFunction(animal) {
    if ('swim' in animal) {
        console.log(animal.swim);
    }
}
// class로부터 생산된 object라면 instanceof로 narrowing
// 가장 쉽게 new 카워드로 object 생산할 수 있는게 날짜
let date = new Date();
if (date instanceof Date) {
}
// 위 두개중 하나에만 있는 유니크한 속성이 없어서 in 사용 불가
// 둘다 부모 class가 없어서 instanceof 도 불가
// 비슷한 object 타입일 경우 literal type 강제로 만들어두면 나중에 도움이 된다.
function ExFunction(x) {
    if (x.wheel === '4개') {
        console.log('x는 Car 타입이에요.');
    }
}
