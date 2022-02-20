// 함수와 methods에 type alias 지정하는 법
// 그냥 함수는 타입을 이렇게 지정
function function1(a) {
    return 123;
}
// 함수 type alias 부착하려면 함수 표헌식을 써야한다.
/*
  function 함수 () {} -> 이건 함수 선언식
  이거 말고
  let 함수 = function () {} -> 이건 함수 표현식
  이거 써야한다고 한다.

  그냥 정의가 다를뿐
*/
let function2 = function (a) {
    return 10;
};
function2('abc');
// object 안에 함수를 만들 수 있다.
let customerInfo1 = {
    name: 'kim',
    plusOne() {
    }
};
customerInfo1.plusOne();
let customerInfo2 = {
    name: 'kim',
    plusOne(a) {
        return a + 1;
    },
    changeName: (a) => { return 123; }
};
customerInfo2.plusOne(2);
customerInfo2.changeName(2);
let customerInfo3 = {
    plusOne(a) {
        return a + 1;
    },
    changeName: () => {
        console.log('안녕');
    }
};
let cutZero = (a) => {
    let val = a.replace(/^0+/, "");
    return val;
};
cutZero('01234');
let removeDash = (a) => {
    let val = a.replace(/-/g, "");
    return parseInt(val);
};
removeDash('010-1234-5678');
let Q3 = (a, b, c) => {
    let result1 = b(a);
    let reslut2 = c(result1);
    console.log(reslut2);
};
Q3('010-1111-2222', cutZero, removeDash);
