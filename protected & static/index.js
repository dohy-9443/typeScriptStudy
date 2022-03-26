// class 복사하고 싶으면 extends 붙이면 된다.
// 기존 class와 비슷한 class를 많이 만들어야할 때 사용
// 복습 private 붙이면 class {}  안에서만 사용 가능
// private와 유사한 protected
class User4 {
    constructor() {
        this.x = 10;
    }
}
class User5 extends User4 {
    doThis() {
        this.x = 20;
    }
}
// protected: extends된 class는 사용가능, 자식들 사용불가
// private: extends된 class는 사용불가능, 자식들 사용불가
class User6 {
    constructor() {
        this.y = 20;
    }
}
User6.x = 10;
let userSix = new User6();
console.log(userSix); // 이렇게하면 y 만 보임
// static 키워드를 붙이면 부모 class에 직접 부여됨 ( 자식은 못씀 )
console.log(User6.x);
// static은 다른 키워드랑 다르게 같이 사용도 가능
// private / protected / public + static 가능
class User7 {
}
User7.x = 10;
User7.y = 20;
User7.z = 30; // public은 생략가능
// 배운거 활용 예시
class User8 {
    constructor() {
        this.intro = `${User8.skill} 전문가 입니다.`;
    }
}
User8.skill = 'js';
let aa = new User8();
console.log(aa);
User8.skill = 'ts';
let bb = new User8();
console.log(bb);
// x 속성에 숫자를 더해주는 함수가 필요합니다.
// class User {
//   private static x = 10;
//   public static y = 20;
// }
// User.addOne(3) //이렇게 하면 x가 3 더해져야함
// User.addOne(4) //이렇게 하면 x가 4 더해져야함
class User9 {
    static addOne(a) {
        User9.x = +a;
    }
    static print() {
        console.log(User9.x);
    }
}
User9.x = 10;
User9.y = 20;
User9.addOne(3);
User9.addOne(4);
User9.print();
// 이런거 어떻게 만들게요 
// let 네모 = new Square(30, 30, 'red');
// 네모.draw()
// 네모.draw()
// 네모.draw()
// 네모.draw()
// 우선 랜덤 색상코드 만들기
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
class Square2 {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        let a = Math.random(); // 0 ~ 1 사이의 임의의 값
        let square = `
      <div 
        style='
          position: relative;
          top: ${a * 400}px;
          left: ${a * 400}px;
          width: ${this.width}px;
          height: ${this.height}px;
          background: ${this.color};
        '
      ></div>
    `;
        document.body.insertAdjacentHTML('beforeend', square);
    }
}
for (let i = 0; i < 10; i++) {
    let m1 = new Square2(30, 30, getRandomColor());
    m1.draw();
}
