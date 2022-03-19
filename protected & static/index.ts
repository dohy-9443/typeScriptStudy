
// class 복사하고 싶으면 extends 붙이면 된다.
// 기존 class와 비슷한 class를 많이 만들어야할 때 사용

// 복습 private 붙이면 class {}  안에서만 사용 가능

// private와 유사한 protected

class User4 {
  protected x = 10;
}

class User5 extends User4 {
  doThis() {
    this.x = 20;
  }
}

// protected: extends된 class는 사용가능, 자식들 사용불가
// private: extends된 class는 사용불가능, 자식들 사용불가


class User6 {
  static x = 10;
  y = 20;
}

let userSix = new User6();

console.log(userSix) // 이렇게하면 y 만 보임

// static 키워드를 붙이면 부모 class에 직접 부여됨 ( 자식은 못씀 )

console.log(User6.x)

// static은 다른 키워드랑 다르게 같이 사용도 가능
// private / protected / public + static 가능

class User7 {
  private static x = 10;
  protected static y = 20;
  public static z = 30; // public은 생략가능
}

// 배운거 활용 예시
class User8 {
  static skill = 'js'
  intro = `${User8.skill} 전문가 입니다.`

}

let aa = new User8();
console.log(aa)

User8.skill = 'ts';

let bb = new User8();
console.log(bb)