// Object에 타입지정하려면 interface 이것도 있음
// 이거도 됨
let square = { color: 'red', width: 100 };
let 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
let 장바구니 = [
    { product: '청소기', price: 7000, card: false },
    { product: '청소기', price: 7000, card: false }
];
let twoFunObj = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b
};
console.log(twoFunObj.plus(1, 2));
console.log(twoFunObj.minus(1, 2));
